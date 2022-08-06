export default class Modal {
  constructor(contentId, fallbackText) {
    this.fallbackText = document.getElementById(contentId);
    this.contentTemplateEl = document.getElementById('modal-template');
  }

  show() {
    if ('content' in document.createElement('template')) {
      const modalElements = document.importNode(
        this.modalTemplateEl.content,
        true
      );
      const modalElement = modalElements.querySelector('.modal');
      const backdropElement = modalElements.querySelector('.backdrop');
      const contentElement = document.importNode(
        (this.contentElement = document.content),
        true
      );
      modalElement.appendChild(contentElement);

      document.body.insertAdjacentElement('afterbegin', modalElement);
      document.body.insertAdjacentElement('afterbegin', backdropElement);
    }
  }
}
