import { FILM } from "@/data/film";
import { SCREENPLAY } from "@/data/screenplay";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildScreenplayHtml(): string {
  const scenes = SCREENPLAY.map((scene) => {
    const heading = `<p class="scene">${scene.number}. ${escapeHtml(
      scene.slug
    )} ${escapeHtml(scene.location)} - ${escapeHtml(scene.time)}</p>`;

    const body = scene.elements
      .map((el) => {
        if (el.type === "action") {
          return `<p class="action">${escapeHtml(el.text)}</p>`;
        }
        if (el.type === "transition") {
          return `<p class="transition">${escapeHtml(el.text)}</p>`;
        }
        const paren = el.parenthetical
          ? `<p class="paren">(${escapeHtml(el.parenthetical)})</p>`
          : "";
        return (
          `<p class="character">${escapeHtml(el.character)}</p>` +
          paren +
          `<p class="dialogue">${escapeHtml(el.line)}</p>`
        );
      })
      .join("");

    return `<section class="scene-block">${heading}${body}</section>`;
  }).join("");

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<title>${escapeHtml(FILM.title)} - Screenplay</title>
<style>
  @page { size: A4; margin: 1in; }
  * { box-sizing: border-box; }
  html, body {
    margin: 0;
    padding: 0;
    background: #ffffff;
    color: #000000;
    font-family: "Courier New", Courier, monospace;
    font-size: 12pt;
    line-height: 1.4;
  }
  .title-page {
    text-align: center;
    padding-top: 3in;
    page-break-after: always;
  }
  .title-page h1 {
    font-size: 26pt;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin: 0 0 0.4in;
  }
  .title-page .tagline { font-style: italic; margin-bottom: 1.6in; }
  .title-page .meta { font-size: 12pt; line-height: 2; }
  .scene-block { page-break-inside: avoid; margin-bottom: 18pt; }
  .scene {
    font-weight: bold;
    text-transform: uppercase;
    margin: 18pt 0 10pt;
  }
  .action { margin: 0 0 10pt; }
  .character {
    text-transform: uppercase;
    margin: 10pt 0 0 2in;
  }
  .paren { margin: 0 0 0 1.6in; }
  .dialogue { margin: 0 1.5in 10pt 1in; }
  .transition {
    text-transform: uppercase;
    text-align: right;
    margin: 10pt 0 14pt;
  }
  .end { text-align: center; margin-top: 24pt; font-weight: bold; }
</style>
</head>
<body>
  <div class="title-page">
    <h1>${escapeHtml(FILM.title)}</h1>
    <p class="tagline">"${escapeHtml(FILM.tagline)}"</p>
    <div class="meta">
      <div>${escapeHtml(FILM.genre)}</div>
      <div>${escapeHtml(FILM.runtime)}</div>
      <div>${escapeHtml(FILM.year)}</div>
    </div>
  </div>
  ${scenes}
  <p class="end">- END -</p>
</body>
</html>`;
}

export function printScreenplay(): void {
  const html = buildScreenplayHtml();

  const iframe = document.createElement("iframe");
  iframe.setAttribute("aria-hidden", "true");
  iframe.style.position = "fixed";
  iframe.style.right = "0";
  iframe.style.bottom = "0";
  iframe.style.width = "0";
  iframe.style.height = "0";
  iframe.style.border = "0";

  document.body.appendChild(iframe);

  const doc = iframe.contentWindow?.document;
  if (!doc) {
    document.body.removeChild(iframe);
    return;
  }

  doc.open();
  doc.write(html);
  doc.close();

  const triggerPrint = () => {
    const win = iframe.contentWindow;
    if (!win) return;
    win.focus();
    win.print();
    // Clean up after the print dialog has had time to read the document.
    setTimeout(() => {
      if (iframe.parentNode) iframe.parentNode.removeChild(iframe);
    }, 1000);
  };

  // Wait for the iframe document to be ready before printing.
  if (iframe.contentWindow?.document.readyState === "complete") {
    setTimeout(triggerPrint, 150);
  } else {
    iframe.onload = () => setTimeout(triggerPrint, 150);
  }
}
