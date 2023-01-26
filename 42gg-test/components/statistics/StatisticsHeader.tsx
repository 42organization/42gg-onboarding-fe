import Link from 'next/link';
import styles from 'styles/statistics/StatisticsHeader.module.scss';

export default function StatisticsHeader() {
  return (
    <div className={styles.headerWrap}>
      <div id={styles.logo}>
        <Link href={'/'}>
          <div>42GG</div>
        </Link>
      </div>
    </div>
  );
}
