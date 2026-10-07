import { Arrow } from "@/components/ui/Arrow";
import { profile } from "@/data/profile";
export function SiteFooter() {
  return (
    <footer id="contact">
      <div className="footer-main section-pad">
        <p className="section-kicker" data-reveal>
          06 / Start a conversation
        </p>
        <div className="footer-grid">
          <div>
            <h2 data-reveal>
              Build with
              <br />
              <em>confidence.</em>
            </h2>
            <p className="footer-address">{profile.address}</p>
          </div>
          <div className="contact-side" data-reveal>
            <p>
              For legal advisory, property opportunities, investment
              partnerships or speaking engagements.
            </p>
            <a href={`mailto:${profile.emails[0]}`}>
              {profile.emails[0]} <Arrow diagonal />
            </a>
            <div className="contact-details">
              <a href={`tel:${profile.phoneHref}`}>{profile.phone}</a>
              <a href={`tel:${profile.secondaryPhoneHref}`}>
                {profile.secondaryPhone}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <a className="monogram" href="#top">
          MO<span>.</span>
        </a>
        <span>© {new Date().getFullYear()} Mirian Okoro</span>
        <span>Enugu, Nigeria · WAT</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
