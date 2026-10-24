import { createFileRoute } from "@tanstack/react-router";
import { guard } from "../../lib/guard.server";
import { allow, clientIp } from "../../lib/limit.server";
import { findPreset } from "../../lib/preset.server";
import { json } from "../../lib/respond.server";
import { isFinderInput } from "../../lib/platform";

export const Route = createFileRoute("/api/find")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const blocked = guard(request);
        if (blocked) return blocked;

        const input = new URL(request.url).searchParams.get("url")?.trim() ?? "";
        if (!input) return json({ ok: false, error: "Linknya belum diisi." }, 400);
        if (!isFinderInput(input)) return json({ ok: false, error: "Itu bukan link TikTok, YouTube, atau Instagram." }, 400);
        if (!allow(clientIp(request))) {
          return json({ ok: false, error: "Terlalu banyak permintaan, tunggu sebentar." }, 429);
        }

        try {
          return json({ ok: true, data: await findPreset(input) });
        } catch (e) {
          return json({ ok: false, error: e instanceof Error ? e.message : "Ada yang error, coba lagi." }, 502);
        }
      },
    },
  },
});
