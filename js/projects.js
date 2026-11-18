/**
 * Renders PROJECTS (js/data/projects.js) into the "My work" list.
 * Uses textContent everywhere, so project data is never parsed as HTML.
 */
(() => {
  const list = document.querySelector("[data-projects]");
  if (!list || typeof PROJECTS === "undefined") return;

  const STATUS_BADGES = {
    "in-development": { label: "In development", className: "badge--wip" },
    "coming-soon": { label: "Coming soon", className: "badge--soon" },
  };

  const reducedMotion =window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const el = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  };

  const renderProject = (project) => {
    const card = el("li", "project");

    if (project.video) {
      const video = el("video", "project__media");
      video.src = project.video;
      video.muted = true;
      video.loop = true;
      video.playsInline = true;
      video.preload = "metadata";
      video.setAttribute("aria-label", `Gameplay clip of ${project.title}`);
      // Respect reduced-motion: no autoplay, let the user start it
      if (reducedMotion) video.controls = true;
      else video.autoplay = true;
      card.append(video);
    } else if (project.image) {
      const img = el("img", "project__media");
      img.src = project.image;
      img.alt = `Screenshot of ${project.title}`;
      img.loading = "lazy";
      card.append(img);
    }

    const header = el("div", "project__header");
    header.append(el("h3", "project__title", project.title));
    const badge = STATUS_BADGES[project.status];
    if (badge) header.append(el("span", `badge ${badge.className}`, badge.label));
    card.append(header);

    if (project.meta) card.append(el("p", "project__meta", project.meta));
    card.append(el("p", "project__description", project.description));

    if (project.highlights?.length) {
      const highlights = el("ul", "project__highlights");
      project.highlights.forEach((text) => highlights.append(el("li", null, text)));
      card.append(highlights);
    }

    if (project.tags?.length) {
      const tags = el("ul", "project__tags");
      tags.setAttribute("aria-label", "Technologies");
      project.tags.forEach((text) => tags.append(el("li", "tag", text)));
      card.append(tags);
    }

    const links = Object.entries({ live: "Live site", code: "Code" })
      .filter(([key]) => project.links?.[key])
      .map(([key, label]) => {
        const a = el("a", "project__link", `${label} →`);
        a.href = project.links[key];
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        return a;
      });
    if (links.length) {
      const row = el("div", "project__links");
      row.append(...links);
      card.append(row);
    }

    return card;
  };

  list.replaceChildren(...PROJECTS.map(renderProject));
})();
