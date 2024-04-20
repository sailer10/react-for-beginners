import PropTypes from "prop-types"
import styles from "./Button.module.css"

function Button({text}) {
    // create-react-app 은 css 코드를 js 오브젝트로 바꿔줌. 따라서 아래와 같이 쓸 수 있다.
    // cra 는 해당 오브젝트를 랜덤한 클래스이름을 만들어서 할당해준다.
    // XX.module.css 파일명 규칙만 따르면 된다!
    return (
        <div>
            <button className={styles.btn}>{text}</button>
        </div>
    );
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
}

export default Button;