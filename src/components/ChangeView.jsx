import * as React from 'react';
import { gridButton, listButton, changeViewContainer } from './change-view.module.scss';

const ChangeView = ({ setCurrentView }) => {
  return (
    <div className={changeViewContainer}>
      <button className={gridButton} onClick={() => setCurrentView('grid')} aria-label="grid" />
      <button className={listButton} onClick={() => setCurrentView('list')} aria-label="list" />
    </div>
  );
}

export default ChangeView;