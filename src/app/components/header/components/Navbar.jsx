'use client';

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IoCartOutline } from 'react-icons/io5';
import { MdMenu } from 'react-icons/md';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import styles from './Navbar.module.css';
import Logo from './Logo';
import { fetchCartItems } from '@/app/(features)/cart/slices/cartThunks';
import { fetchCategories } from '@/app/services/category.services';

const Navbar = () => {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);
  const { items } = useSelector((state) => state.cart);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get('category');

  // Total de ítems en el carrito
  const totalItems = (items || []).reduce((total, item) => total + item.quantity, 0);

  // Cargar el carrito al montar si está vacío
  useEffect(() => {
    if (!items.length) {
      dispatch(fetchCartItems());
    }
  }, [dispatch, items.length]);

  useEffect(() => {
    const loadCategories = async () => {
      const data = await fetchCategories();
      setCategories(data);
    };
    loadCategories();
  }, []);

  // Alternar menú móvil
  const hamburgerMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Componente para renderizar categorías
  const renderCategories = (style) =>
    categories.map((category) => (
      <li key={category.id}>
        <Link
          href={`/products?category=${category.slug}`}
          className={`${style} ${
            activeCategory === String(category.slug) ? styles.active : ''
          }`}
        >
          {category.name}
        </Link>
      </li>
    ));

  return (
    <nav className={styles.navBar}>
      <div className={styles.container}>
        <div className={styles.logoSection}>
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <button className={styles.hamburger} onClick={hamburgerMenu}>
          <MdMenu />
        </button>
      </div>

      {/* Categorías en versión grande */}
      <div className={styles.menuLarge}>
        <ul className={styles.navbarLinks}>{renderCategories(styles.category)}</ul>
      </div>

      {/* Categorías en versión móvil */}
      {isMenuOpen && (
        <div className={styles.menuSmall}>
          <ul className={styles.navbarLinksSmall}>{renderCategories(styles.categorySmall)}</ul>
        </div>
      )}

      <div className={styles.icons}>
        <button className={styles.cart}>
          <Link href="/cart">
            <IoCartOutline />
            {totalItems > 0 && <span className={styles.itemCount}>{totalItems}</span>}
          </Link>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;