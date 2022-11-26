import {Button, Card} from "react-bootstrap";
import React from "react";
import {Link} from 'react-router-dom'

const TaskCard = (task) => {
    //console.log(quest);
    return <Card className="card">
        <Card.Body>
            <div className="textStyle">
                <Card.Title>{task.name}</Card.Title>
            </div>
            <div className="textStyle">
                <Card.Text>
                    <div>
                        Тип: {task.type_name}
                    </div>
                    <div>
                        Сделано? - {task.done}
                    </div>
                    <div>
                        Срок: {task.datetime}
                    </div>
                    <div>
                        Приоритет: {task.priority}
                    </div>
                </Card.Text>
            </div>
            <Button className="cardButton" href={`http://localhost:3000/quests/${quest.id_quest}`} variant="primary">Подробнее</Button>
        </Card.Body>
    </Card>
}

export default