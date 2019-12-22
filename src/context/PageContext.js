import React from 'react';

const PageStateContext = React.createContext();
const PageDispatchContext = React.createContext();

function pageReducer(state, action) {
  console.log('page (state, new): ', state.page, action.value);
  switch (action.type) {
    case 'setPage': {
      return { ...state, page: action.value };
    }
    default: {
      throw state;
    }
  }
}
function PageProvider({ children }) {
  const [state, dispatch] = React.useReducer(pageReducer, { page: '' });
  return (
    <PageStateContext.Provider value={state}>
      <PageDispatchContext.Provider value={dispatch}>
        {children}
      </PageDispatchContext.Provider>
    </PageStateContext.Provider>
  );
}
function usePageState() {
  const context = React.useContext(PageStateContext);
  if (context === undefined) {
    throw new Error('usePageState must be used within a PageProvider');
  }
  return context;
}
function usePageDispatch() {
  const context = React.useContext(PageDispatchContext);
  if (context === undefined) {
    throw new Error('usePageDispatch must be used within a PageProvider');
  }
  return context;
}
export { PageProvider, usePageDispatch, usePageState };
