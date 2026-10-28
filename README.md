# Green-Harvest Organic Farm Website — WEDE5020

## Project overview
This static website presents Green-Harvest Organic Farm, a fictional South African organic produce business. It contains the home, about, products, online shop, FAQs, enquiry and contact pages. The website is built with HTML5, CSS3 and vanilla JavaScript.

## Pages
- `index.html` — home page and introduction.
- `about.html` — farm background, mission and values.
- `products.html` — product catalogue with search and category filtering.
- `shop.html` — product/cart interface.
- `faq.html` — frequently asked questions with an interactive accordion.
- `enquiry.html` — product, delivery, bulk order, volunteering and sponsorship enquiries.
- `contact.html` — general contact message form and location map.
- `style.css` — shared styling and responsive layout.
- `script.js` — navigation, FAQ accordion, product filtering, image lightbox and client-side form validation.

## Running locally
1. Download or clone the repository.
2. Keep the HTML files, `style.css`, `script.js` and image assets in the same folder structure.
3. Open `index.html` in a modern browser. For a more consistent local development experience, use a local static server such as the Live Server extension in Visual Studio Code.

## Functionality implemented for Part 3
- Mobile navigation toggle with an accessible expanded state.
- FAQ accordion with click, Enter and Space keyboard interaction.
- Product search and category filtering on `products.html`.
- Click-to-expand lightbox for catalogue/gallery images; close with the close button, backdrop or Escape key.
- Contact form validates required fields, email format, name/message lengths and optional phone number format, then prepares a message using the visitor's default email application.
- Enquiry form validates contact details and enquiry type, provides an appropriate informational response, and prepares an email to the organisation.
- HTML5 validation attributes (`required`, `type`, `minlength`, `maxlength`, `pattern`, `min` and `max`) are combined with JavaScript validation.
- SEO metadata, descriptive titles, responsive images, internal navigation, `robots.txt` and `sitemap.xml` are included.

### Form limitation
This is a static front-end project. The forms use a `mailto:` link to prepare an email; they do not send email automatically, store submissions on a server, check live inventory, or confirm prices/availability. The visitor must send the prepared email, and the organisation must confirm details. JavaScript validation is client-side only and is not a substitute for server-side validation in a production system.

## SEO notes
- Each page has a unique title and meta description.
- Heading structure and image alternative text should describe the actual content.
- Use descriptive, lowercase page filenames and internal links.
- Optimise images and keep scripts/styles efficient.
- `sitemap.xml` contains a placeholder base URL. Replace `https://YOUR-DEPLOYED-DOMAIN/` with the actual HTTPS URL after publishing the website.
- Submit the sitemap through Google Search Console after deployment if desired.
- Off-page SEO such as backlinks and social media promotion requires ongoing work outside the website code.

## Deployment
This site can be deployed to GitHub Pages or Netlify as a static website. Publish the folder containing the HTML files and assets. After deployment:
1. Test all pages on desktop and mobile.
2. Test form validation and the email-app handoff.
3. Replace the placeholder domain in `sitemap.xml` with the live site domain.
4. Add the repository and live website URLs to your LMS submission.

## Changelog

### Part 3 — 28 October 2026
- Added `script.js` to centralise page interactions and avoid repeating inline JavaScript across pages.
- Added mobile navigation toggle behaviour and `aria-expanded` updates to improve small-screen navigation and accessibility.
- Implemented an accessible FAQ accordion supporting mouse and keyboard interaction.
- Implemented product catalogue text search and category filtering using JavaScript DOM manipulation.
- Added an image lightbox to enlarge product/gallery images, with close-button, backdrop and Escape-key support.
- Added `enquiry.html` with fields for name, email, phone, enquiry category, product/service, quantity, preferred date and additional details.
- Updated `contact.html` with associated labels, field names, input constraints and an accessible status message.
- Added JavaScript submit handlers to validate contact and enquiry form values before preparing an email to `info@greenharvest.co.za`. The page displays a relevant response and clearly states that live availability/pricing must be confirmed by the farm.
- Added HTML5 constraints and custom JavaScript checks for name/message lengths, email format, phone number format and quantity/date values.
- Added unique page titles, SEO meta descriptions and a theme-colour meta tag to the site pages.
- Added lazy loading to content images to reduce initial loading work, and responsive image/lightbox styling.
- Added focus-visible styling, form status styling and mobile layout adjustments.
- Created `robots.txt` and `sitemap.xml`; the sitemap domain must be updated after deployment.
- Expanded this README with project structure, local setup, functionality, deployment steps, limitations and references.

### Part 2 feedback corrections — carried forward and reviewed
Based on the supplied Part 2 marking feedback:
- Reviewed CSS default styling and added shared focus, image, form feedback and responsive rules to improve consistency.
- Improved form and interactive-element styling and keyboard focus visibility.
- Added responsive handling for navigation, contact form layout and lightbox display on smaller screens.
- Expanded the README changelog with detailed descriptions rather than brief change labels.
- Expanded the references section and documented the implementation and limitations.
- The feedback also identified areas for improvement in typography, layout spacing/alignment, colour consistency and commit-message detail. Review the live pages at desktop, tablet and mobile widths before submission, and use descriptive Git commit messages for your own repository history.

## References
- The Independent Institute of Education (The IIE). 2026. *WEDE5020 Module Manual*. Internal student material.
- The Independent Institute of Education (The IIE). 2026. *WEDE5020 JavaScript Basics: Conditional Statements, Arrays & Functions*. Course learning notes supplied for this project.
- The Independent Institute of Education (The IIE). 2026. *WEDE5020 JavaScript Form Validation*. Course learning notes supplied for this project.
- MDN Web Docs. n.d. *JavaScript Guide*. Available at: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide (Accessed: 28 October 2026).
- MDN Web Docs. n.d. *Client-side form validation*. Available at: https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation (Accessed: 28 October 2026).
- MDN Web Docs. n.d. *HTMLInputElement.checkValidity()*. Available at: https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/checkValidity (Accessed: 28 October 2026).
- WHATWG. n.d. *HTML Living Standard*. Available at: https://html.spec.whatwg.org/ (Accessed: 28 October 2026).
- Google Search Central. n.d. *Build and submit a sitemap*. Available at: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap (Accessed: 28 October 2026).
- Google Search Central. n.d. *Introduction to robots.txt*. Available at: https://developers.google.com/search/docs/crawling-indexing/robots/intro (Accessed: 28 October 2026).

## Author note
Before final submission, replace the sitemap placeholder with the real published domain, verify all pages and image paths, and update the changelog if further changes are made. Do not claim that the website has been pushed or deployed until those steps have actually been completed.
