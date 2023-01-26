import Link from 'next/link';
import styles from 'styles/statistics/StatisticsHeader.module.scss';

export default function AdminHeader() {
  return (
    <div style={{  }}>
      <div >
        <Link href={'/'}>
          <div>42GG</div>
        </Link>
      </div>
    </div>
  );
}
