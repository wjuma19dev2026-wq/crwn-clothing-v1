import styles from './Toast.module.css'

const Toast = ({ error, closeToast }) => {
  const { statusCode, status, message } = error

  return (
    <div className={styles.container}>
      <div
        style={{ width: '100%' }}
        className={`toast show bg-${error.statusCode === 500 ? 'danger' : 'warning'} text-light`}
        role="alert"
        aria-live="assertive"
        aria-atomic="true">
        <div className="toast-header text-light">
          <strong className="me-auto">
            {`${status}`.toUpperCase() + ': ' + statusCode}
          </strong>
          {/*<small>11 mins ago</small>*/}
          <button
            type="button"
            className="btn-close ms-2 mb-1"
            onClick={closeToast}>
            <span aria-hidden="true"></span>
          </button>
        </div>
        <div className="toast-body">{message}</div>
      </div>
    </div>
  )
}

export default Toast
