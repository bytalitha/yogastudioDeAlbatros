const accordion = document.querySelector(".accordion-container");
let activePanel = null; 

accordion.addEventListener("click", (e) => {
  const clickedPanel = e.target.closest(".accordion-panel");
  if (!clickedPanel) return;

  if (activePanel === clickedPanel) {
    toggleAccordion(clickedPanel);
    activePanel = null;
  } else {
    if (activePanel) {
      toggleAccordion(activePanel);
    }
    toggleAccordion(clickedPanel);
    activePanel = clickedPanel;
  }
});

function toggleAccordion(panelToActivate) {
  const activeButton = panelToActivate.querySelector("button");
  const activePanel = panelToActivate.querySelector(".accordion-content");
  const activePanelIsOpened = activeButton.getAttribute("aria-expanded");

  if (activePanelIsOpened === "true") {
    activeButton.setAttribute("aria-expanded", false);
    activePanel.setAttribute("aria-hidden", true);
  } else {
    activeButton.setAttribute("aria-expanded", true);
    activePanel.setAttribute("aria-hidden", false);
  }
}