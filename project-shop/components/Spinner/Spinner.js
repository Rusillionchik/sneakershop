class Spinner {

handleClear() {
    ROOT_Spinner.innerHTML = '';
}




    render() {
        const html = `
        <div class="spinner-container">
              <img class="spinner__img" src = "components/Spinner/img/spinner.svg"
        </div>
        `;
        ROOT_Spinner.innerHTML = html;
    }
}

const spinnerPage = new Spinner ()