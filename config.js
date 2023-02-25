import {createRequire} from "module";
import {extend} from "./scripts/tasks/util.js";

const require = createRequire(import.meta.url);
export const pjson = require('./package.json');

export const config = {
  paths: {
    copy: [
      {
        casesensitive: true,
        src: 'src/structure/',
        glob: 'src/structure/**/**',
        replaceGlob: 'src/structure/**/**.{php,html,xml,php,ini,less,json,js,css}',
        dest: 'dist/',
      }
    ],
    release: [
      {
        src: 'src/structure/',
        glob: 'src/structure/**/**',
        replaceGlob: 'src/structure/**/**.{php,html,xml,php,ini,less,json,js,css}',
        dest: 'releasefiles/',
      }
    ],
    package: [
      {
        src: 'releasefiles/plugins/system/kickstart/',
        glob: 'releasefiles/plugins/system/kickstart/**/**',
        dest: 'sourcefiles/plg_system_kickstart/'
      }
    ],
    cleaner: [
      'releasefiles/',
      'sourcefiles/',
      'archives/',
      'package/'
    ],
    updateXML: {
      src: 'update.xml',
      rename: 'oldupdate.xml',
      template: 'updatetemplate.xml',
      dest: './'
    },
  },
  archiver: [
    {
      destination : 'archives/',
      name: 'plg_system_kickstart',
      suffixversion: true,
      types: [
        {
          extension: '.zip',
          type: 'zip',
          options: {
            zlib: { 'level': 9 }
          }
        }
      ],
      folders: [
        'sourcefiles/plg_system_kickstart'
      ],
      files: [
      ]
    }
  ]
};

export const stringsreplace = extend({}, {"[VERSION]": pjson.version}, pjson.placeholder);
