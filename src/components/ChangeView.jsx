import * as React from 'react';
import { gridButton, listButton } from './change-view.module.scss';

const ChangeView = ({ setCurrentView, currentView }) => {
  return (
    <>
      {currentView === 'list' && <button className={gridButton} onClick={() => setCurrentView('grid')} aria-label="grid" />}
      {currentView === 'grid' && <button className={listButton} onClick={() => setCurrentView('list')} aria-label="list" />}
    </>
  );
}

export default ChangeView;