import { html, LitElement } from '@polymer/lit-element/lit-element.js';

const notificationsCSS = `
.ncf-container{font-size:14px;box-sizing:border-box;position:fixed;z-index:999999}.ncf-container.nfc-top-left{top:2vh;left:2vw;margin:0 auto 0 2vw}.ncf-container.nfc-top-middle{top:2vh;margin:auto;padding-right:10vw;width:100%}.ncf-container.nfc-top-right{top:2vh;right:2vw;margin:0 2vw 0 auto}.ncf-container.nfc-bottom-right{bottom:2vh;right:2vw;margin:0 2vw 0 auto}.ncf-container.nfc-bottom-middle{bottom:2vh;margin:auto;padding-right:10vw;width:100%}.ncf-container.nfc-bottom-left{bottom:2vh;left:2vw;margin:0 auto 0 2vw}@media (min-width:500px){.ncf-container .ncf{min-width:0;max-width:400px;width:400px;padding:30px}}.ncf-container .ncf{background:#fff;transition:.3s ease;position:relative;pointer-events:auto;overflow:hidden;padding:2vw;width:70vw;border-radius:3px 3px 3px 3px;box-shadow:0 0 12px var(--styled-notifications-default-background,#999);color:#000;opacity:.9;-ms-filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=90);filter:alpha(opacity=90);background-position:15px!important;background-repeat:no-repeat!important;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ncf-container .ncf:hover{box-shadow:0 0 12px #000;opacity:1;cursor:pointer}.ncf-container .ncf .ncf-title{font-weight:700;font-size:16px;text-align:left;margin-top:0;margin-bottom:6px;word-wrap:break-word}.ncf-container .ncf .nfc-message{margin:0;text-align:left;word-wrap:break-word}.ncf-container .success{background:var(--styled-notifications-success-background,#51a351);background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADsSURBVEhLY2AYBfQMgf///3P8+/evAIgvA/FsIF+BavYDDWMBGroaSMMBiE8VC7AZDrIFaMFnii3AZTjUgsUUWUDA8OdAH6iQbQEhw4HyGsPEcKBXBIC4ARhex4G4BsjmweU1soIFaGg/WtoFZRIZdEvIMhxkCCjXIVsATV6gFGACs4Rsw0EGgIIH3QJYJgHSARQZDrWAB+jawzgs+Q2UO49D7jnRSRGoEFRILcdmEMWGI0cm0JJ2QpYA1RDvcmzJEWhABhD/pqrL0S0CWuABKgnRki9lLseS7g2AlqwHWQSKH4oKLrILpRGhEQCw2LiRUIa4lwAAAABJRU5ErkJggg==")}.ncf-container .info,.ncf-container .success{color:#fff;padding:15px 15px 15px 50px;margin:auto}.ncf-container .info{background:var(--styled-notifications-info-background,#2f96b4);background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGwSURBVEhLtZa9SgNBEMc9sUxxRcoUKSzSWIhXpFMhhYWFhaBg4yPYiWCXZxBLERsLRS3EQkEfwCKdjWJAwSKCgoKCcudv4O5YLrt7EzgXhiU3/4+b2ckmwVjJSpKkQ6wAi4gwhT+z3wRBcEz0yjSseUTrcRyfsHsXmD0AmbHOC9Ii8VImnuXBPglHpQ5wwSVM7sNnTG7Za4JwDdCjxyAiH3nyA2mtaTJufiDZ5dCaqlItILh1NHatfN5skvjx9Z38m69CgzuXmZgVrPIGE763Jx9qKsRozWYw6xOHdER+nn2KkO+Bb+UV5CBN6WC6QtBgbRVozrahAbmm6HtUsgtPC19tFdxXZYBOfkbmFJ1VaHA1VAHjd0pp70oTZzvR+EVrx2Ygfdsq6eu55BHYR8hlcki+n+kERUFG8BrA0BwjeAv2M8WLQBtcy+SD6fNsmnB3AlBLrgTtVW1c2QN4bVWLATaIS60J2Du5y1TiJgjSBvFVZgTmwCU+dAZFoPxGEEs8nyHC9Bwe2GvEJv2WXZb0vjdyFT4Cxk3e/kIqlOGoVLwwPevpYHT+00T+hWwXDf4AJAOUqWcDhbwAAAAASUVORK5CYII=")}.ncf-container .warning{background:var(--styled-notifications-warning-background,#f87400);background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGYSURBVEhL5ZSvTsNQFMbXZGICMYGYmJhAQIJAICYQPAACiSDB8AiICQQJT4CqQEwgJvYASAQCiZiYmJhAIBATCARJy+9rTsldd8sKu1M0+dLb057v6/lbq/2rK0mS/TRNj9cWNAKPYIJII7gIxCcQ51cvqID+GIEX8ASG4B1bK5gIZFeQfoJdEXOfgX4QAQg7kH2A65yQ87lyxb27sggkAzAuFhbbg1K2kgCkB1bVwyIR9m2L7PRPIhDUIXgGtyKw575yz3lTNs6X4JXnjV+LKM/m3MydnTbtOKIjtz6VhCBq4vSm3ncdrD2lk0VgUXSVKjVDJXJzijW1RQdsU7F77He8u68koNZTz8Oz5yGa6J3H3lZ0xYgXBK2QymlWWA+RWnYhskLBv2vmE+hBMCtbA7KX5drWyRT/2JsqZ2IvfB9Y4bWDNMFbJRFmC9E74SoS0CqulwjkC0+5bpcV1CZ8NMej4pjy0U+doDQsGyo1hzVJttIjhQ7GnBtRFN1UarUlH8F3xict+HY07rEzoUGPlWcjRFRr4/gChZgc3ZL2d8oAAAAASUVORK5CYII=")}.ncf-container .error,.ncf-container .warning{color:#fff;padding:15px 15px 15px 50px;margin:auto}.ncf-container .error{background:var(--styled-notifications-error-background,#bd362f);background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHOSURBVEhLrZa/SgNBEMZzh0WKCClSCKaIYOED+AAKeQQLG8HWztLCImBrYadgIdY+gIKNYkBFSwu7CAoqCgkkoGBI/E28PdbLZmeDLgzZzcx83/zZ2SSXC1j9fr+I1Hq93g2yxH4iwM1vkoBWAdxCmpzTxfkN2RcyZNaHFIkSo10+8kgxkXIURV5HGxTmFuc75B2RfQkpxHG8aAgaAFa0tAHqYFfQ7Iwe2yhODk8+J4C7yAoRTWI3w/4klGRgR4lO7Rpn9+gvMyWp+uxFh8+H+ARlgN1nJuJuQAYvNkEnwGFck18Er4q3egEc/oO+mhLdKgRyhdNFiacC0rlOCbhNVz4H9FnAYgDBvU3QIioZlJFLJtsoHYRDfiZoUyIxqCtRpVlANq0EU4dApjrtgezPFad5S19Wgjkc0hNVnuF4HjVA6C7QrSIbylB+oZe3aHgBsqlNqKYH48jXyJKMuAbiyVJ8KzaB3eRc0pg9VwQ4niFryI68qiOi3AbjwdsfnAtk0bCjTLJKr6mrD9g8iq/S/B81hguOMlQTnVyG40wAcjnmgsCNESDrjme7wfftP4P7SP4N3CJZdvzoNyGq2c/HWOXJGsvVg+RA/k2MC/wN6I2YA2Pt8GkAAAAASUVORK5CYII=")!important}.ncf-container button{position:relative;right:-.3em;top:-.3em;float:right;font-weight:700;color:#fff;text-shadow:0 1px 0 #fff;opacity:.8;line-height:1;font-size:16px;padding:0;cursor:pointer;background:transparent;border:0}.ncf-container button:hover{opacity:1}
`;

/**
 * `styled-notifications-element`
 * Polymer lit-element implementation of JamieLivingstone/Notifications
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class StyledNotificationsElement extends LitElement {
  static get properties() {
    return {
      notification: Object,
      defaultTitle: String,
      defaultMessage: String,
      defaultTheme: String,
      defaultShowDuration: Number,
      defaultCloseOnClick: Boolean,
      defaultDisplayCloseButton: Boolean,
      defaultPositionClass: String,
      defaultOnclick: Boolean,
      successColor: String,
      infoColor: String,
      warningColor: String,
      errorColor: String,
      defaultColor: String
    };
  }
  constructor() {
    super();

    //import notifications.js
    import('styled-notifications/dist/notifications.js');

    //initialize property values
    this.defaultTitle = "";
    this.defaultMessage = "";
    this.defaultTheme = 'default';
    this.defaultShowDuration = 3500;
    this.defaultCloseOnClick = true;
    this.defaultDisplayCloseButton = true;
    this.defaultPositionClass = 'nfc-top-left';
    this.defaultOnclick = false;

    this.notification = {
      title: this.defaultTitle,
      message: this.defaultMessage,
      theme: this.defaultTheme,                           //['default', 'info', 'error', 'success', 'warning']
      showDuration: 0,                                    //milliseconds to display message
      closeOnClick: this.defaultCloseOnClick,
      displayCloseButton: this.defaultDisplayCloseButton,
      positionClass: this.defaultPositionClass,           //['nfc-top-left','nfc-top-middle','nfc-top-right','nfc-bottom-left','nfc-bottom-middle','nfc-bottom-right']
      onclick: this.defaultOnclick
    };

    this.successColor = '#51A351';
    this.infoColor = '#2F96B4';
    this.warningColor = '#f87400';
    this.errorColor = '#BD362F';
    this.defaultColor = '#999999';

    //load notifications.css into the main page head tag
    /*let styleEl = document.createElement('link');
    styleEl.setAttribute("rel", "stylesheet");
    styleEl.setAttribute("type", "text/css");
    styleEl.setAttribute("href", '../node_modules/styled-notifications/dist/notifications.css');*/

    let styleEl = document.createElement('style');
    styleEl.innerText = notificationsCSS;
    document.getElementsByTagName("head")[0].appendChild(styleEl);

  }

  render() {
    return html`
      <style>
        td {
          min-width: 20vw;
        }
      </style>
      <div hidden>
        <table>
          <tr>
            <td>
              <label for="title">Title:</label>
            </td>
            <td>
              <div id="title">${this.notification.title}</div>
            </td>
          </tr>

          <tr>
            <td>
              <label for="message">Message:</label>
            </td>
            <td>
              <div id="message">${this.notification.message}</div>
            </td>
          </tr>

          <tr>
            <td>
              <label for="theme">Theme:</label>
            </td>
            <td>
              <div id="theme">${this.notification.theme}</div>
            </td>
          </tr>

          <tr>
            <td>
              <label for="showDuration">Show Duration:</label>
            </td>
            <td>
              <div id="showDuration">${this.notification.showDuration}</div>
            </td>
          </tr>
      </div>
    `;
  }
  firstUpdated() {
    let styleEl = document.createElement('style');
    styleEl.innerText = `
      :root {
        --styled-notifications-success-background: ${this.successColor};
        --styled-notifications-info-background: ${this.infoColor};
        --styled-notifications-warning-background: ${this.warningColor};
        --styled-notifications-error-background: ${this.errorColor};
        --styled-notifications-default-background: ${this.defaultColor};
      }
    `;
    document.getElementsByTagName("head")[0].appendChild(styleEl);
  }
  updated(propMap) {
    let oldValue = propMap.get('notification');
    if (typeof oldValue === 'object' || typeof oldValue === 'Object') {
      this.handleNotification();
    }
  }
  handleNotification() {
    let notification = this.notification;
    if (notification.message) {
      let doNotification = window.createNotification({
        closeOnClick: (notification.closeOnClick ? notification.closeOnClick : this.defaultCloseOnClick),
        displayCloseButton: (notification.displayCloseButton ? notification.displayCloseButton : this.defaultDisplayCloseButton),
        positionClass: (notification.positionClass ? notification.positionClass : this.defaultPositionClass),
        onclick: (notification.onclick ? notification.onclick : this.defaultOnclick),
        theme: (notification.theme ? notification.theme : this.defaultTheme),
        showDuration: (notification.showDuration ? notification.showDuration : this.defaultShowDuration)
      });

      doNotification({
        title: (notification.title ? notification.title : this.defaultTitle),
        message: notification.message
      });
    }
  }
}

window.customElements.define('styled-notifications-element', StyledNotificationsElement);
