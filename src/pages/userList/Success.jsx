import React from "react";
import { Link } from "react-router-dom";
import successimg from "../../assets/img/success.svg";

function Success({ count }) {
  return (
    <div>
      <div class="success-block">
        <img src={successimg} alt="Success" />
        <h3>Успешно!</h3>
        <p>Всем {count} пользователям отправлено приглашение.</p>
        <Link to="/">
          <button className="send-invite-btn">Назад</button>
        </Link>
      </div>
    </div>
  );
}

export default Success;
