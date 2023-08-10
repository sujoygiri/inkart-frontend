let moreParagraphButtons: string[] = [
  'paragraphFormat',
  'formatOL',
  'formatUL',
  'lineHeight',
  'quote',
  'alignLeft',
  'alignCenter',
];
let moreTextButtons: string[] = [
  'bold',
  'italic',
  'underline',
  'strikeThrough',
  'subscript',
  'superscript',
  'fontSize',
  'textColor',
  'inlineClass',
  'clearFormatting',
];
let moreRichButtons: string[] = [
  'insertLink',
  'insertImage',
  'embedly',
  'insertHR',
];

let moreMiscButtons: string[] = ['undo', 'redo', 'help'];

export const toolbarButtons = {
  moreParagraph: {
    buttons: moreParagraphButtons,
    buttonsVisible: 3,
  },
  moreText: {
    buttons: moreTextButtons,
    buttonsVisible: 3,
  },
  moreRich: {
    buttons: moreRichButtons,
    buttonsVisible: 4,
  },
  moreMisc: {
    buttons: moreMiscButtons,
    align: 'right',
    buttonsVisible: 0,
  },
};

export const toolbarButtonsMD = {
  moreParagraph: {
    buttons: moreParagraphButtons,
    buttonsVisible: 2,
  },
  moreText: {
    buttons: moreTextButtons,
    buttonsVisible: 2,
  },
  moreRich: {
    buttons: moreRichButtons,
    buttonsVisible: 2,
  },
  moreMisc: {
    buttons: moreMiscButtons,
    align: 'right',
    buttonsVisible: 0,
  },
};

export const toolbarButtonsSM = {
  moreParagraph: {
    buttons: moreParagraphButtons,
    buttonsVisible: 2,
  },
  moreText: {
    buttons: moreTextButtons,
    buttonsVisible: 2,
  },
  moreRich: {
    buttons: moreRichButtons,
    buttonsVisible: 2,
  },
  moreMisc: {
    buttons: moreMiscButtons,
    align: 'right',
    buttonsVisible: 0,
  },
};

export const toolbarButtonsXS = {
  moreParagraph: {
    buttons: moreParagraphButtons,
    buttonsVisible: 0,
  },
  moreText: {
    buttons: moreTextButtons,
    buttonsVisible: 0,
  },
  moreRich: {
    buttons: moreRichButtons,
    buttonsVisible: 0,
  },
  moreMisc: {
    buttons: moreMiscButtons,
    align: 'right',
    buttonsVisible: 0,
  },
};
