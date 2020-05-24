class SimplePopup {
    #contentLoaded = false;
    #popupModal = null;
    #popup = null;

    constructor(modal, popup) {
        this.#popupModal = document.getElementById(modal);
        this.#popup = document.getElementById(popup);
    }

    toggleShow() {
        //toggle class
        this.#popupModal.classList.toggle("show-modal");
        //check if need load content
        if (!this.#contentLoaded) {
            this._loadContent();
        }
    }

    _loadContent() {
        const sendData = {
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            method: 'POST',
            body: 'popupName=Cool Popup'
        };

        fetch('/server.php', sendData)
            .then(res => res.json())
            .then(res => {

                this.#contentLoaded = true;

                const header = res.popupName || 'popup';

                this.#popup.innerHTML += `
                    <header>${header}</header>
                    <div class="content">${res.contentText}</div>
                    `;
            });
    }
}
