window.addEventListener("load", () => {
    const popupModal = new SimplePopup('simple-popup-modal', 'simple-popup');
    const toggleSimplePopupButton = document.getElementById('toggle-simple-popup');
    toggleSimplePopupButton.addEventListener("click", () => {
        popupModal.toggleShow();
    });
})
