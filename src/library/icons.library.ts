export type IconName =
  | "filesystem"
  | "recipes"
  | "affiliate"
  | "users"
  | "settings"
  | "dashboard"
  | "statistics"
  | "signout"

const arrow = {
  paths: [
    {
      d: "M17.9188 8.17969H11.6888H6.07877C5.11877 8.17969 4.63877 9.33969 5.31877 10.0197L10.4988 15.1997C11.3288 16.0297 12.6788 16.0297 13.5088 15.1997L15.4788 13.2297L18.6888 10.0197C19.3588 9.33969 18.8788 8.17969 17.9188 8.17969Z",
      mainColor: true,
    },
  ],
  rect: [],
  ellipse: [],
};
const filesystem = {
  paths: [
    {
      d: "m19.62,7.11v8.65c0,1.23-1.01,2.23-2.25,2.23H2.63c-1.24,0-2.25-1-2.25-2.23V4.88h17c.29,0,.57.06.82.16.25.09.47.22.65.39.27.23.48.52.62.84.11.26.16.54.16.84Z",
      mainColor: false,
    },
    {
      d: "m19.21,5.91c-.13-.21-.33-.39-.58-.54-.17-.11-.38-.19-.62-.25h-7.95l-.42-1.19c-.41-1.15-1.5-1.93-2.72-1.93H1.19c-.43,0-.79.35-.79.79v3.13h9.94,0s8.87-.01,8.87-.01Z",
      mainColor: true,
    }
  ],
  rect: [],
  ellipse: [],
};

const recipes = {
  paths: [
      {
          d: "m10,0v17.53c-.26,0-.51.06-.69.17l-2.84,1.69c-1.57.94-2.48.59-2.88.29-.4-.29-1.01-1.05-.59-2.85l.67-2.93c.09-.39-.09-1-.36-1.27l-2.36-2.38c-.81-.81-1.12-1.69-.87-2.48.25-.78,1.01-1.32,2.14-1.51l3.03-.51c.35-.05.82-.41.98-.73l1.67-3.37c.53-1.06,1.27-1.65,2.1-1.65Z",
          mainColor: false,
      },
      {
          d: "m16.69,12.63c-.28.27-.45.88-.36,1.27l.67,2.93c.41,1.8-.19,2.56-.59,2.85-.21.15-.54.32-1.03.32s-1.08-.15-1.86-.61l-2.84-1.7c-.18-.11-.43-.16-.68-.16V0c.82,0,1.56.59,2.09,1.65l1.67,3.37c.16.33.63.67.98.73l3.03.51c1.14.19,1.9.73,2.15,1.52.24.78-.07,1.66-.88,2.47l-2.35,2.38Z",
          mainColor: true,
      }
  ],
  rect: [],
  ellipse: [],
};
const affiliate = {
  paths: [
    {
      d: "m4.51,7.88c-1.32-.26-2.62-.65-3.86-1.18-.43,1.05-.65,2.17-.65,3.33,0,.83.12,1.64.34,2.42,1.43.66,2.91,1.14,4.41,1.42-.36-1.99-.44-4-.24-6Z",
      mainColor: true,
    },
    {
      d: "m6.28.47c-2.14.63-3.94,2.13-5.02,4.14,1.15.47,2.35.84,3.58,1.09,.25-1.8.74-3.55,1.44-5.23Z",
      mainColor: true,
    },
    {
      d: "m.86,14.45c1.01,2.55,2.94,4.46,5.3,5.24-.47-1.25-.84-2.54-1.12-3.88-1.42-.28-2.82-.73-4.18-1.36Z",
      mainColor: true,
    },
    {
      d: "m13.15,6.38c-.3-2.16-.91-4.27-1.82-6.26-.94-.16-1.99-.16-2.91,0-.91,1.99-1.52,4.1-1.82,6.26,2.18.34,4.37.34,6.55,0Z",
      mainColor: true,
    },
    {
      d: "m9.91,16.07c-.85,0-1.7-.07-2.56-.2.31,1.38.72,2.72,1.25,4.01.84.16,1.79.16,2.61,0,.52-1.28.94-2.63,1.25-4.01-.85.13-1.7.2-2.56.2Z",
      mainColor: true,
    },
    {
      d: "m6.87,8.03c-.19,2-.1,4.02.29,6.01,1.82.28,3.68.28,5.5,0,.39-1.98.48-4.01.29-6.01-1.01.15-2.03.25-3.04.25s-2.03-.09-3.04-.25Z",
      mainColor: true,
    },
    {
      d: "m13.82,19.76c2.36-.78,4.29-2.68,5.3-5.24-1.36.63-2.76,1.08-4.18,1.36-.28,1.34-.65,2.63-1.12,3.88Z",
      mainColor: false,
    },
    {
      d: "m18.37,4.79c-1.07-2.02-2.89-3.51-5.02-4.14.69,1.68,1.19,3.43,1.44,5.23,1.23-.25,2.44-.62,3.58-1.09Z",
      mainColor: false,
    },
    {
      d: "m19.35,6.71c-1.24.52-2.54.92-3.86,1.18.19,2,.12,4.01-.24,6,1.51-.28,2.98-.76,4.41-1.42,.22-.78,.34-1.59,.34-2.42,0-1.16-.22-2.28-.65-3.33Z",
      mainColor: false,
    },
  ],
  rect: [],
  ellipse: [],
};


const users = {
  paths: [
    {
      d: "m6,18.5c0,.33.01.68.01,1.02v.48h-.01v-1.5Z",
      mainColor: false,
    },
    {
      d: "m9.9.27c-.06-.02-.12-.05-.18-.06.38-.14.79-.21,1.21-.21.2,0,.4.02.59.05-.14.02-.29.05-.43.1-.1.03-.2.06-.29.1-.12.05-.23.1-.34.15-.05.02-.09.05-.13.08-.16.08-.31.18-.46.28.14-.11.29-.2.45-.29-.14-.08-.28-.14-.42-.2Z",
      mainColor: false,
    },
    {
      d: "m4.95,10.73c-1.16,0-2.03.35-2.65,1.07-.56.66-.89,1.58-1.05,2.92-.14,1.13-.13,2.42-.12,3.78,0,.33.01.68.01,1.02v.48h2.98v-.48c0-.34,0-.7-.01-1.03-.01-1.37-.01-2.66.12-3.8.16-1.35.5-2.28,1.06-2.94.48-.56.59-.59,1.36-1.02h-1.7Z",
      mainColor: false,
    },
    {
      d: "m8.54,9.46c.4,0,.52-.01.63-.01-1.86-.61-3.02-2.61-3.02-4.72S7.66.62,9.52.02c-.58-.02-.57-.02-.98-.02-2.26,0-4.1,2.12-4.1,4.73s1.84,4.73,4.1,4.73Z",
      mainColor: false,
    },
    {
      d: "m9.02,1.62c-.08.1-.15.21-.22.32s-.14.23-.2.35c-.07.12-.12.24-.18.37-.1.25-.19.51-.26.78-.11.41-.16.84-.16,1.29s.05.88.16,1.29c.04.13.08.27.12.4.04.11.08.22.12.33,0,.04.02.07.04.1.05.11.1.21.16.32.06.12.13.23.2.34.07.14.17.27.27.39.06.08.13.16.2.24.16.18.34.34.52.49.03.02.05.04.08.07.09.06.18.12.27.18.05.04.11.08.17.11.08.05.16.09.24.12.08.04.17.07.25.1.09.04.19.07.29.1.14.05.29.08.43.1.19.03.38.05.58.05.48,0,.93-.1,1.36-.27.41-.17.78-.4,1.12-.7.98-.86,1.62-2.23,1.62-3.76s-.64-2.9-1.62-3.76c-.34-.3-.71-.54-1.12-.7-.43-.18-.88-.27-1.36-.27-.2,0-.39.02-.58.05-.14.02-.29.05-.43.1-.1.03-.2.06-.29.1-.12.05-.23.1-.34.15-.04.02-.09.04-.14.07-.16.09-.31.18-.45.29-.03.02-.05.04-.08.07-.18.15-.36.31-.52.49-.09.1-.17.2-.25.3Z",
      mainColor: true,
    },
    {
      d: "m17.44,11.81s-.07-.08-.11-.12c-.61-.63-1.44-.96-2.5-.96h-5.75c-.8.12-1.43.46-1.91,1.02-.42.49-.72,1.14-.9,2-.06.29-.11.6-.15.94-.01.01-.01.02-.01.03-.07.62-.11,1.29-.11,1.99-.01.58,0,1.18,0,1.79v1.5h12.64v-.48c0-.16,0-.32.01-.48v-.47c.02-2.73.03-5.31-1.21-6.76Z",
      mainColor: true,
    },
  ],
  rect: [],
  ellipse: [],
};
const settings = {
  paths: [
    {
      d: "m19.99,8.37c0-.58-.37-1.08-.91-1.23l-1.9-.52c-.11-.03-.2-.11-.26-.22-.15-.32-.33-.63-.52-.93-.07-.1-.09-.22-.06-.34l.48-1.97c.14-.56-.1-1.15-.58-1.43L13.54.16c-.49-.28-1.09-.19-1.48.22l-1.37,1.47c-.08.08-.19.13-.31.12-.14,0-.27,0-.4,0-.14,0-.29,0-.44.02-.12,0-.24-.04-.32-.13l-1.38-1.44c-.39-.41-1-.5-1.48-.21l-2.68,1.6c-.48.29-.72.87-.57,1.43l.5,1.97c.03.11.01.24-.05.34-.19.29-.35.59-.5.9-.05.11-.15.19-.26.22l-1.9.53c-.53.15-.9.66-.9,1.23v3.21c.01.58.38,1.08.92,1.23l1.9.52c.11.03.2.11.26.22.15.32.33.63.52.93.07.1.09.22.06.34l-.48,1.97c-.14.56.1,1.15.58,1.43l2.71,1.57c.48.28,1.08.19,1.47-.22l1.37-1.47c.08-.08.19-.13.31-.12.14,0,.27,0,.4,0,.15,0,.29,0,.44-.02.12,0,.24.04.32.13l1.38,1.44c.39.41,1,.5,1.48.21l2.68-1.6c.48-.29.72-.87.57-1.43l-.5-1.97c-.03-.11-.01-.24.05-.34.19-.29.35-.59.5-.9.05-.11.15-.19.26-.22l1.9-.53c.53-.15.9-.66.9-1.23v-3.21Zm-9.94,6.3c-2.61,0-4.73-2.12-4.73-4.73s2.12-4.72,4.73-4.72,4.72,2.12,4.72,4.72-2.12,4.73-4.72,4.73Z",
      mainColor: false,
    },
    {
      d: "m10.06,6.89c-1.69,0-3.06,1.37-3.06,3.05s1.37,3.06,3.06,3.06,3.05-1.37,3.05-3.06-1.37-3.05-3.05-3.05Z",
      mainColor: true,
    },
  ],
  rect: [],
  ellipse: [],
};

const dashboard = {
  paths: [],
  rect: [
    { x: "11.35", y: "11.35", rx: ".59", ry: ".59", width: "7.3", height: "7.3", mainColor: false },
    { x: "11.35", y: "1.35", rx: ".59", ry: ".59", width: "7.3", height: "7.3", mainColor: true },
    { x: "1.35", y: "11.35", rx: ".59", ry: ".59", width: "7.3", height: "7.3", mainColor: false },
    { x: "1.35", y: "1.35", rx: ".59", ry: ".59", width: "7.3", height: "7.3", mainColor: false },

  ],
  ellipse: [],
};
const statistics = {
  paths: [
    {
      d: "m2.25,8.75h3c.55,0,1,.45,1,1v8.08H1.25v-8.08c0-.55.45-1,1-1Z",
      mainColor: false,
    },
    {
      d: "m8.5,5.33h3c.55,0,1,.45,1,1v11.5h-5V6.33c0-.55.45-1,1-1Z",
      mainColor: false,
    },
    {
      d: "m14.75,2.17h3c.55,0,1,.45,1,1v14.67h-5V3.17c0-.55.45-1,1-1Z",
      mainColor: true,
    },
  ],
  rect: [],
  ellipse: [],
};

const signout = {
  paths: [
    {
      d: "m14.51,7.33h2.67V1.78C17.18.8,16.37.01,15.38.01H4.6c-.17,0-.33.03-.48.07-.01,0-.02.01-.03.01h0s-.01,0-.01,0c-.05.01-.09.03-.14.05-.03,0-.06.02-.09.03h0s0,.01,0,.01c-.1.05-.19.1-.28.16-.03.01-.06.03-.09.06-.06.05-.11.09-.16.15-.06.04-.11.1-.16.17-.03.05-.07.1-.1.16,0,.02-.01.04-.03.06-.11.17-.17.36-.2.56v14.46h0c.01.06.01.1.03.15.01.04.03.08.04.13,0,.01,0,.03.01.04,0,.01,0,.02.02.04.01.01.01.02.01.02.02.06.05.12.09.18.03.07.07.14.12.2t.02.02s.01.01.01.01c.01.01.02.03.03.04.01.02.02.03.04.05t.01.02s.06.06.1.09c.05.06.11.11.18.16,0,0,0,.01.02.01.15.12.32.2.5.26.1.03.2.05.3.06.01.01.02.01.04.01.07,0,.14,0,.21,0h10.78c.99,0,1.8-.79,1.8-1.77v-5.31h-2.72l1.04,1.16c.18.2.18.52,0,.72l-.58.65c-.18.2-.47.2-.65,0l-2.39-2.66-.63-.7c-.33-.37-.33-.97,0-1.35l.63-.69,2.34-2.61c.21-.23.54-.23.75,0l.48.54c.21.23.21.61,0,.84l-.94,1.04Z",
      mainColor: true,
    },
    {
      d: "m10.13,3.41v15.71c0,.63-.67,1.05-1.26.78l-4.72-2.16c-.81-.37-1.32-1.16-1.32-2.03V1.51c.11-.68.61-1.23,1.27-1.42l5.53,2.53c.31.14.51.45.51.78Z",
      mainColor: false,
    },

  ],
  rect: [],
  ellipse: [],
};


export const icons = {
  arrow,
  filesystem,
  recipes,
  affiliate,
  users,
  settings,
  dashboard,
  statistics,
  signout,
};
