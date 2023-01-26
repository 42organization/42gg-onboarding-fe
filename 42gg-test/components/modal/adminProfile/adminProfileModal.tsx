import { useSetRecoilState } from 'recoil';
import { useEffect, useState } from 'react';
import styles from 'styles/modal/event/YoloModal.module.scss';
import modalStyles from 'styles/modal/Modal.module.scss';
// import { YOLO } from 'types/modalTypes';
import { modalState } from 'utils/recoil/modal';
import instance from 'utils/axios';
import Image from 'next/image';

export default function AdminProfileModal(user: any) {
  const [userInfo, setUserInfo] = useState<any>();
  //   currentExp
  //   expRate
  //   intraId
  //   level
  //   maxExp
  //   racketType
  //   rivalRecord,  statusMessage, userImageUri

  const [userProfileImg, setUserProfileImg] = useState<File>();
  const [userPreviewImg, setPreviewImg] = useState<string>();
  useEffect(() => {
    if (userProfileImg) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImg(reader.result as string);
      };
      reader.readAsDataURL(userProfileImg);
    }
  }, [userProfileImg]);

  const photoUpload = (e: any) => {
    e.preventDefault();
    const file = e.target.files[0];
    if (file) {
      setUserProfileImg(file);
    }
  };

  const setModal = useSetRecoilState(modalState);

  useEffect(() => {
    getBasicProfileHandler();
  }, []);

  const getBasicProfileHandler = async () => {
    const res = await instance.get(`/pingpong/users/sungwook/detail`);
    // res?.data
    setUserInfo({ ...res.data }); // deep copy X, shallow copy O
    // setUserInfo(res.data);
  };

  return (
    <div className={modalStyles.backdrop} id='modalOutside'>
      <div className={modalStyles.modalContainer}>
        <div className={styles.container}>
          <div className={styles.phrase}>
            <div className={styles.emoji}></div>
            <div className={styles.title}>회원 정보 수정</div>
            <div className={styles.rose}>
              <label>
                <Image
                  src={
                    userPreviewImg
                      ? userPreviewImg
                      : `${userInfo?.userImageUri}`
                  }
                  width='150'
                  height='150'
                  alt=''
                />
                <input
                  type='file'
                  style={{ display: 'none' }}
                  onChange={photoUpload}
                ></input>
              </label>
              <br />
              <label>ID</label>
              <br />
              <label>이메일</label>
              <br />
              <label>상태 메시지</label>
              <br />
              <label>Racket type : </label>
              <br />
              <label>승 :</label>
              <br />
              <label>패 :</label>
              <br />
              <label>PPP :</label>
            </div>
          </div>
          <div className={styles.buttons}>
            <div className={styles.negative}></div>
            <div className={styles.positive}>
              <button onClick={() => setModal({ modalName: null })}>
                CANCEL
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
