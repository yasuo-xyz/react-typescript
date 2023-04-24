import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <h2>Todoリスト with TypeScript</h2>
        {/* onSubmitとは、フォームに何かタスクを打ち込んでエンターキを押すとゆう時にどういった操作をするのかを指定する時に使う */}
        <form onSubmit={() => {}}>
          {/* onChangeとは、inputに文字を打ち込む度に呼ばれるプロパティーになっている */}
          <input type="text" onChange={() => {}} />
          {/* 送信ボタン */}
          <input type="submit" value="作成" />
        </form>
      </div>
    </div>
  );
}

export default App;
