import './scss/index.scss'
import {Excel} from './components/excel/Excel';
import {Header} from './components/header/Header';
import {Tooldbar} from './components/toolbar/Tooldbar';
import {Formula} from './components/formula/Formula';
import {Table} from './components/table/Table';

const excel = new Excel('#app', {
    components: [Header, Tooldbar, Formula, Table]
});

excel.render();
