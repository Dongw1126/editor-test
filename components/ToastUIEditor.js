// import {useEffect, useRef} from 'react';
// import dynamic from "next/dynamic";
//
// // Toast 에디터
// // import { Editor } from '@toast-ui/react-editor';
//
// // Next.js 에선 Dynamic Import 해줘야 사용가능
// const Editor = dynamic(() => import('@toast-ui/react-editor')
//     .then(m => m.Editor), {ssr: false});
//
// // import '@toast-ui/editor/dist/i18n/ko-kr';
// import '@toast-ui/editor/dist/toastui-editor.css';
//
// export default function ToastUIEditor() {
//     const editorRef = useRef(null);
//
//     const getMarkdown = () => {
//         // const editorInstance = editorRef?.current.getInstance();
//         // console.log(editorInstance?.getMarkdown());
//         console.log(editorRef.current)
//     }
//
//     const onClick = () => {
//         getMarkdown();
//     }
//
//     return (// https://nhn.github.io/tui.editor/latest/ToastUIEditorCore
//         <div>
//             <Editor
//                 ref={editorRef}
//                 placeholder="내용을 입력해주세요."
//                 previewStyle="vertical" // 미리보기 스타일 지정
//                 height="600px" // 에디터 창 높이
//                 initialEditType="wysiwyg" // 초기 입력모드 설정(디폴트 markdown)
//                 toolbarItems={[// 툴바 옵션 설정
//                     ['heading', 'bold', 'italic', 'strike'], ['hr', 'quote'], ['ul', 'ol', 'task', 'indent', 'outdent'], ['table', 'image', 'link'], ['code', 'codeblock']]}
//                 onChange={() => console.log("changed")}
//             />
//             <button onClick={onClick}>로깅</button>
//         </div>
//
//
//     );
// }