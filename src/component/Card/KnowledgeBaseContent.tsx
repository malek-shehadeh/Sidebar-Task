
//content
import React, { useState } from 'react';
import { KnowledgeBaseCardProps, ViewToggleProps, DashboardSearchBarProps } from '../../types/index';
import AddCollectionModal from './AddCollectionModal';
import '../../styles/Base.scss';
import "../../styles/AddNewCollection.scss"

export const SearchBar: React.FC<DashboardSearchBarProps> = ({
  onSearch,
  placeholder = 'Search'
}) => (
  <div className="searchContainer" role="search">
    <img src="/search-normal.1.svg" alt="" aria-hidden="true" />
    <label htmlFor="search-input" className="visually-hidden">Search knowledge base</label>
    <input
      id="search-input"
      type="search"
      className="searchInput"
      placeholder={placeholder}
      onChange={(e) => onSearch(e.target.value)}
    />
  </div>
);

export const ViewToggle: React.FC<ViewToggleProps> = ({
  currentView,
  onViewChange
}) => (
  <div className="viewToggle">
    <button
      className={`viewToggleButton ${currentView === 'card' ? 'active' : ''}`}
      onClick={() => onViewChange('card')}
      aria-pressed={currentView === 'card'}
    >
      <img src="/element-3.svg" alt="" aria-hidden="true" />
      <span>Card View</span>
    </button>
    <button
      className={`viewToggleButton ${currentView === 'list' ? 'active' : ''}`}
      onClick={() => onViewChange('list')}
      aria-pressed={currentView === 'list'}
    >
      <img src="/row-vertical.svg" alt="" aria-hidden="true" />
      <span>List View</span>
    </button>
  </div>
);

export const SearchToolbar: React.FC<ViewToggleProps & { onSearch: (query: string) => void }> = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="toolsBar" role="toolbar" aria-label="Content view options">
      <ViewToggle currentView={props.currentView} onViewChange={props.onViewChange} />
      <SearchBar onSearch={props.onSearch} />
      <div className="actionButtons">
        <button className="filterButton">
          <img src="/filter.svg" alt="" aria-hidden="true" />
          <span>Filter</span>
        </button>
        <button className="addButton" onClick={() => setIsModalOpen(true)}>
          <img src="/add.svg" alt="" aria-hidden="true" />
          <span>Add New</span>
        </button>
      </div>
      <AddCollectionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

interface ContentProps {
  data: KnowledgeBaseCardProps[];
  currentView: 'card' | 'list';
  currentPage: number;
  onPageChange: (page: number) => void;
}

export const KnowledgeBaseContent: React.FC<ContentProps> = ({
  data,
  
  currentPage,
  onPageChange
}) => {
  const itemsPerPage = 10;
  const totalItems = data.length;

  return (
    <>
      <div className="cardsGrid" role="feed" aria-label="Knowledge base articles">
        {data.map((card) => (
          <article key={card.id} className="knowledgeCard">
            <img src={card.image} alt={card.title} className="knowledgeCardImage" loading="lazy" />
            <div className="knowledgeCardContent">
              <h3 className="knowledgeCardTitle">{card.title}</h3>
              <p className="knowledgeCardDescription">{card.description}</p>
              <div className="knowledgeCardMetrics">
                <div className="knowledgeCardMetricsItem">
                  <img src="/folder-2.svg" alt="" aria-hidden="true" />
                  <span>{card.sections} Sections</span>
                </div>
                <div className="knowledgeCardMetricsItem">
                  <img src="/note-text.svg" alt="" aria-hidden="true" />
                  <span>{card.articles} Articles</span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="footer">
        <div className="footerText">
          <span>Showing on page {(currentPage - 1) * itemsPerPage + 1} - {Math.min(currentPage * itemsPerPage, totalItems)} to {totalItems}</span>
        </div>
        <div className="footerIcons">
          <span>
            <img src="/2 Arrow - Left.svg" alt="Previous" onClick={() => onPageChange(currentPage - 1)} />
          </span>
          <span>
            <img src="/Arrow - Right 3.svg" alt="First" onClick={() => onPageChange(1)} />
          </span>
          {[1, 2, 3, 4, 5].map((page) => (
            <span
              key={page}
              className={currentPage === page ? 'one' : ''}
              onClick={() => onPageChange(page)}
            >
              {page}
            </span>
          ))}
          <span>
            <img src="/Arrow - Right 2.svg" alt="Last" onClick={() => onPageChange(Math.ceil(totalItems / itemsPerPage))} />
          </span>
          <span>
            <img src="/2 Arrow - Right.svg" alt="Next" onClick={() => onPageChange(currentPage + 1)} />
          </span>
        </div>
      </div>
    </>
  );
};