# Reactハンズオン

## 導入

まずはいろいろインストールしていきます。
本家では`babel-core`がインストールされておらずエラーが出ていたので忘れずにインストールしましょう。

```
$ npm install -g create-react-app
$ create-react-app react-like-button
$ cd react-like-button
$ npm start
$ open http://localhost:3000
```

## 編集

```
react-like-button/src/App.js
react-like-button/src/App.css
```

を編集する。

```js
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
```

## 公開用ファイル

```
$ npm run build
```
