import { createFileRoute, Link } from "@tanstack/react-router";
import { siteConfig as site } from "../config/site";
import { pageHead } from "../lib/seo";

export const Route = createFileRoute("/about")({
  head: () => pageHead({
    path: "/about",
    title: "About Developer — Raihan Ramdhani",
    description: "Informasi developer dan tautan resmi Raihan Ramdhani.",
  }),
  component: AboutDeveloper,
});

function AboutDeveloper() {
  return (
    <div className="page developer-page">
      <Link to="/" className="developer-back"><i className="fa-solid fa-arrow-left" aria-hidden="true" /> Kembali ke Preset Finder</Link>
      <section className="developer-card">
        <div className="developer-banner-wrap">
          <img className="developer-banner" src="/developer-banner.jpg" alt="Banner anime untuk About Developer" />
          <div className="developer-banner-shade" />
        </div>
        <div className="developer-content">
          <img className="developer-avatar" src="/developer-profile.jpg" alt="Foto profil developer" />
          <span className="developer-badge developer-profile-badge"><i className="fa-solid fa-code" aria-hidden="true" /> ABOUT DEVELOPER</span>
          <div className="developer-name-row">
            <div>
              <p className="developer-eyebrow">Dibuat dan dikembangkan oleh</p>
              <h1>Raihan Ramdhani</h1>
              <p className="developer-role"><i className="fa-solid fa-laptop-code" aria-hidden="true" /> Web Developer · Creator</p>
            </div>
            <span className="developer-status"><span /> Project Creator</span>
          </div>
          <p className="developer-bio">Halo! Saya Raihan Ramdhani. Halaman ini berisi informasi developer dan tautan sosial resmi. Terima kasih sudah menggunakan Preset Finder — semoga membantu proses pencarian preset Alight Motion kamu.</p>
          <div className="developer-socials" aria-label="Tautan media sosial developer">
            <a href="https://www.instagram.com/raihanfx01/" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram" aria-hidden="true" /><span>Instagram</span><i className="fa-solid fa-arrow-up-right-from-square social-external" aria-hidden="true" /></a>
            <a href="https://whatsapp.com/channel/0029VbDWjQX3wtb9yQYQ512M" target="_blank" rel="noreferrer"><i className="fa-brands fa-whatsapp" aria-hidden="true" /><span>WhatsApp Channel</span><i className="fa-solid fa-arrow-up-right-from-square social-external" aria-hidden="true" /></a>
            <a href="https://vm.tiktok.com/ZS9UPASE33CoS-YQ6IK/" target="_blank" rel="noreferrer"><i className="fa-brands fa-tiktok" aria-hidden="true" /><span>TikTok</span><i className="fa-solid fa-arrow-up-right-from-square social-external" aria-hidden="true" /></a>
            <a href="https://github.com/hanz712" target="_blank" rel="noreferrer"><i className="fa-brands fa-github" aria-hidden="true" /><span>GitHub</span><i className="fa-solid fa-arrow-up-right-from-square social-external" aria-hidden="true" /></a>
            <a href="https://wa.me/6285147481719" target="_blank" rel="noreferrer"><i className="fa-brands fa-whatsapp" aria-hidden="true" /><span>WhatsApp</span><i className="fa-solid fa-arrow-up-right-from-square social-external" aria-hidden="true" /></a>
          </div>
          <div className="developer-note"><i className="fa-solid fa-heart" aria-hidden="true" /><span>Terima kasih sudah berkunjung dan mendukung project ini.</span></div>
        </div>
      </section>
      <p className="developer-footer-note">Preset Finder adalah project independen dan tidak berafiliasi dengan Alight Motion atau TikTok.</p>
    </div>
  );
}
