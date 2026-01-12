* {
  box-sizing: border-box;
  font-family: Arial, sans-serif;
}

body {
  background: linear-gradient(135deg, #1e3c72, #2a5298);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
}

.app {
  background: white;
  padding: 25px;
  border-radius: 15px;
  width: 320px;
  text-align: center;
  box-shadow: 0 15px 30px rgba(0,0,0,0.3);
}

h1 {
  margin-bottom: 20px;
}

.converter input,
.converter select,
.converter button {
  width: 100%;
  padding: 10px;
  margin: 8px 0;
  border-radius: 8px;
  border: 1px solid #ccc;
}

button {
  background: #2a5298;
  color: white;
  border: none;
  font-size: 16px;
  cursor: pointer;
}

button:hover {
  background: #1e3c72;
}

#result {
  margin-top: 15px;
  font-weight: bold;
}
