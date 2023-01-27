import { useState } from 'react';
import Link from 'next/link';
import styles from 'styles/admin/AdminHeader.module.scss';

export default function AdminSelect() {
	const [isOpen, setIsOpen] = useState(false);
	
	return (
		<>
			<div className={styles.leftNav}>
			<div className={styles.leftNavHeader}>
				<h2>Menu</h2>
			</div>
			<ul className={styles.leftNavList}>
				<li>
				<Link href={'/'}>
					<div>Home</div>
				</Link>
				</li>
				<li>
				<Link href={'/about'}>
					<div>About</div>
				</Link>
				</li>
				<li>
				<div
					className={styles.leftNavDropdown}
					onClick={() => setIsOpen(!isOpen)}
				>
					Products
					{isOpen && (
					<ul className={styles.leftNavDropdownMenu}>
						<li>
						<Link href={'/products/category1'}>
							<div>Category 1</div>
						</Link>
						</li>
						<li>
						<Link href={'/products/category2'}>
							<div>Category 2</div>
						</Link>
						</li>
						<li>
						<Link href={'/products/category3'}>
							<div>Category 3</div>
						</Link>
						</li>
					</ul>
					)}
				</div>
				</li>
				<li>
				<Link href={'/contact'}>
					<div>Contact</div>
				</Link>
				</li>
			</ul>
			</div>
		</>
	);
}