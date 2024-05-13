import React, { ReactNode, HTMLProps } from 'react';
import styles from '../styles/modules/title.module.scss';

interface PageTitleProps extends HTMLProps<HTMLParagraphElement> {
  children: ReactNode;
}

function PageTitle({ children, ...rest }: PageTitleProps) {
  return (
    <p className={styles.title} {...rest}>
      {children}
    </p>
  );
}

export default PageTitle;
