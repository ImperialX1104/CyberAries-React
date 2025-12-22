// src/useModals.js
import { useEffect } from "react";

export function useModals() {
  useEffect(() => {
    const openHandlers = [];
    const closeHandlers = [];

    const modalLinks = document.querySelectorAll("[data-modal]");
    modalLinks.forEach(link => {
      const handler = e => {
        e.preventDefault();
        const id = link.dataset.modal;
        const modal = document.getElementById(id);
        if (modal) modal.style.display = "block";
      };
      link.addEventListener("click", handler);
      openHandlers.push({ link, handler });
    });

    const closeButtons = document.querySelectorAll(".modal-close");
    closeButtons.forEach(btn => {
      const handler = () => {
        const overlay = btn.closest(".modal-overlay");
        if (overlay) overlay.style.display = "none";
      };
      btn.addEventListener("click", handler);
      closeHandlers.push({ btn, handler });
    });

    const windowHandler = e => {
      if (e.target.classList?.contains("modal-overlay")) {
        e.target.style.display = "none";
      }
    };
    window.addEventListener("click", windowHandler);

    // cleanup
    return () => {
      openHandlers.forEach(({ link, handler }) =>
        link.removeEventListener("click", handler)
      );
      closeHandlers.forEach(({ btn, handler }) =>
        btn.removeEventListener("click", handler)
      );
      window.removeEventListener("click", windowHandler);
    };
  }, []);
}
