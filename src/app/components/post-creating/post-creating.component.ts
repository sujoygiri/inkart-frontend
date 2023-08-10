import { OnInit, Component, OnDestroy, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Subscription } from 'rxjs';
// import {toolbarButtons, toolbarButtonsXS, toolbarButtonsSM, toolbarButtonsMD} from './editor-buttons'
import EditorJS from '@editorjs/editorjs';
import * as notifier from 'codex-notifier';
import * as tooltip from 'codex-tooltip';

import { PostService } from 'src/app/services/post.service';


@Component({
  selector: 'app-post-creating',
  templateUrl: './post-creating.component.html',
  styleUrls: ['./post-creating.component.css'],
})
export class PostCreatingComponent implements OnInit, OnDestroy, AfterViewInit {

  editor: EditorJS = new EditorJS();
  editorInitialized: boolean = true;
  postSaveSubscription: Subscription = new Subscription();

  constructor(private postService:PostService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.editor = new EditorJS({
      holder: 'editor',
      placeholder: 'Let`s write an awesome story! (Enter title here)',
      // autofocus: true,
      inlineToolbar: ['link', 'bold', 'italic'],
      tools: {
        header: {
          // @ts-ignore
          class: Header,
          inlineToolbar: ['link', 'bold', 'italic'],
          config: {
            placeholder: 'Enter a header',
            levels: [1, 2, 3, 4, 5, 6],
            defaultLevel: 1,
            onActivate(){
              console.log('Header tool activated');
            }
          },
        },
        list: {
          // @ts-ignore
          class: List,
          inlineToolbar: true,
          config: {
            defaultStyle: 'unordered',
          },
        },
        embed: {
          // @ts-ignore
          class: Embed,
        },
        quote: {
          // @ts-ignore
          class: Quote,
          inlineToolbar: true,
          shortcut: 'CMD+SHIFT+O',
          config: {
            quotePlaceholder: 'Enter a quote',
            captionPlaceholder: "Quote's author",
          },
        },
        linkTool: {
          // @ts-ignore
          class: LinkTool,
          config: {
            endpoint: 'http://localhost:8080/api/post/link-preview', // Your backend endpoint for url data fetching,
          }
        },
        image: {
          // @ts-ignore
          class: ImageTool,
          config: {
            endpoints: {
              byFile: 'http://localhost:8080/api/post/upload-image', // Your backend file uploader endpoint
              byUrl: 'http://localhost:8080/api/post/upload-image', // Your endpoint that provides uploading by Url
            },
          },
        },
        // @ts-ignore
        delimiter: Delimiter,
        code: {
          // @ts-ignore
          class:CodeTool
        }
      },
    });
  }

  ngOnDestroy(): void {
    this.postSaveSubscription.unsubscribe();
  }

  async publish() {
    let editorData = await this.editor.save();
    let postData = JSON.stringify(editorData.blocks);
    this.postSaveSubscription = this.postService.savePost(postData).subscribe({});
  }
}

/*
ngAfterViewInit(): void {
    const updateEditorIntializedState = () => {
      this.editorInitialized = false;
    }
    // @ts-ignore
    this.editor = new FroalaEditor('#editor', {
      toolbarButtons,
      toolbarButtonsXS,
      toolbarButtonsSM,
      toolbarButtonsMD,
      fontSizeSelection: true,
      fontSizeDefaultSelection: '18',
      toolbarSticky: true,
      toolbarStickyOffset: 70,
      imageUploadParam: 'image',
      imageUploadURL: 'http://localhost:8080/api/post/upload-image',
      imageUploadMethod: 'POST',
      quickInsertEnabled: false,
      theme: 'dark',
      // pastePlain: true,
      events:{
        'initialized': function () {
          updateEditorIntializedState();
        }
      }
    });
  }

  ngOnDestroy(): void {}

  publish() {
    console.log(this.editor.html.get());
    let editorData = this.editor.html.get();
  }




  ===============================
  "styles": [
              "src/styles.css",
              "node_modules/froala-editor/css/froala_editor.pkgd.min.css",
              "node_modules/froala-editor/css/third_party/embedly.min.css",
              "node_modules/froala-editor/css/themes/dark.min.css"
            ],
            "scripts": [
              "node_modules/froala-editor/js/froala_editor.pkgd.min.js",
              "node_modules/froala-editor/js/third_party/embedly.min.js"
            ]
*/
