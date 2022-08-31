// import React, {useEffect, useState} from 'react';
// import ReactDOM from 'react-dom';
// import {Editor, EditorState, convertFromRaw} from 'draft-js';
// import 'draft-js/dist/Draft.css';
//
// const emptyContentState = convertFromRaw({
//     entityMap: {},
//     blocks: [
//         {
//             text: '',
//             key: 'foo',
//             type: 'unstyled',
//             entityRanges: [],
//         },
//     ],
// });
//
// export default function DraftJsEditor() {
//     const [editorState, setEditorState] = useState(EditorState.createWithContent(emptyContentState));
//
//     useEffect(() => {
//         console.log(editorState);
//     }, [editorState])
//
//     return (
//         <Editor editorKey="foo"
//                 placeholder="write something"
//                 editorState={editorState} onChange={setEditorState}/>
//     );
// }
//
// // class DraftJsEditor extends React.Component {
// //     constructor(props) {
// //         super(props);
// //         this.state = {editorState: EditorState.createEmpty()};
// //         this.onChange = editorState => this.setState({editorState});
// //     }
// //
// //     render() {
// //         return (
// //             <Editor editorState={this.state.editorState} onChange={this.onChange} />
// //         );
// //     }
// // }
// //
// // ReactDOM.render(<DraftJsEditor />, document.getElementById('container'));