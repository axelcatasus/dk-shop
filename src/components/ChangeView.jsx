import * as React from 'react';
import { gridButton, listButton, changeViewContainer } from './change-view.module.scss';

const ChangeView = ({ setCurrentView, currentView }) => {
  return (
    <div className={changeViewContainer}>
      {currentView === 'list' && <button className={gridButton} onClick={() => setCurrentView('grid')} aria-label="grid" />}
      {currentView === 'grid' && <button className={listButton} onClick={() => setCurrentView('list')} aria-label="list" />}
    </div>
  );
}

export default ChangeView;