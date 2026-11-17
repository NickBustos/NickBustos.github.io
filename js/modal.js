/**
 * Modal behaviour for the main menu.
 *
 * - Links with [data-modal="<id>"] open the <dialog> with that id.
 * - Dialogs close with the close button, the Esc key or a click on the backdrop.
 * - The URL hash mirrors the open modal, so #about / #work / #contact are shareable.
 */
(() => {
  const openModal = (id) => {
    const dialog = document.getElementById(id);
    if (!(dialog instanceof HTMLDialogElement) || dialog.open) return;

    document.querySelectorAll("dialog[open]").forEach((d) => d.close());
    dialog.showModal();
    history.replaceState(null, "", `#${id}`);
  };

  document.querySelectorAll("[data-modal]").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      openModal(link.dataset.modal);
    });
  });

  document.querySelectorAll("dialog.modal").forEach((dialog) => {
    dialog.querySelector(".modal__close")?.addEventListener("click", () => dialog.close());

    // A click whose target is the <dialog> itself landed on the backdrop.
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) dialog.close();
    });

    dialog.addEventListener("close", () => {
      history.replaceState(null, "", location.pathname + location.search);
    });
  });

  if (location.hash) openModal(location.hash.slice(1));
})();
