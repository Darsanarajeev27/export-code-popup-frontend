import styles from './exportpopup.module.css';
import { useState } from 'react';
export default function ExportPopup({onClose}) {
    const [activeTab, setActiveTab] = useState('html');
    const isHtml = activeTab==='html';
    const htmlOptions = [
        'Include assets (images, styles, fonts, etc.)',
        'include custom code',
    ];
    const nextOptions = [
        'Use "app" directory (NextJS v13+)',
        'Include assets locally (images, styles, fonts, etc.)',
        'Include custom code',
    ];

  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <div className={styles.popupHeader}>
            <div>
                <h2>Code Export</h2>
                <p>Manage how you download your website&apos;s code.</p>
            </div>
            <button className={styles.closeBtn} onClick={onClose}><img src="/x.svg" alt="" /></button>
        </div>
        <div className={styles.tabsContainer}>
        <div className={styles.tabs}>
            <button className={isHtml ? styles.active : styles.tabsbtn} onClick={()=>setActiveTab('html')}>HTML & CSS</button>
            <button className={!isHtml ? styles.active : styles.tabsbtn} onClick={()=>setActiveTab('next')}> NextJS</button>
        </div>
        <div className={styles.contentBox}>
            <div className={styles.exportLabel}>
                <div className={styles.exportLabelText}>
                    <span className={styles.exportIcon}>{isHtml? <img src="/HTML.svg" alt="HTML Icon" /> :<img src="/Group.svg" alt="next icon" />}</span>
                    <span> Export as {isHtml?'HTML & CSS' : 'NEXT JS Project'}</span>
                </div>
                <span className={styles.pill}>Zipped</span>
            </div>
            <div className={styles.options}>
                {(isHtml ? htmlOptions:nextOptions).map((text, index)=>(
                    <label key={index} className={styles.checkBoxLine}>
                        <input type="checkbox" defaultChecked/>
                        {text}
                    </label>
                ))}
            </div>
        </div>
        </div>
        <div className={styles.downloadBtnContainer}>
        <button className={styles.downloadBtn}>Download {isHtml?'HTML CSS':'Next JS'} Project</button>
        </div>
      </div>
    </div>
  );
}