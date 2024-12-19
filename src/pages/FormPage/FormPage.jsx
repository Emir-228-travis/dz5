import React, {useState} from 'react';
import "./fromPage.css"
function FormPage(props) {
    const [inputValue, setInputValue] = useState("");
    const [nameList, setNameList] = useState([]); // список имен

    const addName = () => {
        if (inputValue.trim()) {
            setNameList([...nameList, inputValue.trim()])
            setInputValue("");
        }
    }

    const changeName = (index) => {
        if (inputValue.trim()) {
            const updatedList = nameList.map((name, i) =>
                i === index ? inputValue.trim() : name
            );
            setNameList(updatedList)
            setInputValue("") // Очистка поле ввода
        }
    }

    return (
        <div className="name-list-container">
            <h1>Список имен</h1>

            <div className="input-section">
                <input type="text"
                       value={inputValue}
                       onChange={(e) => setInputValue(e.target.value)}
                       placeholder="Введите имя"
                />
                <button onClick={addName} disabled={!inputValue.trim()}> Добавить</button>
            </div>

            <div className="name-list">
                {nameList.length === 0 ? (
                    <p>Список пуст</p>
                ) : (
                    nameList.map((name, index) => (
                        <div key={index} className="name-item">
                            <span>{name}</span>
                            <button onClick={() => changeName(index)} disabled={!inputValue.trim()}> Поменять</button>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}

export default FormPage;