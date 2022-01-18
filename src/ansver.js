// const Item = ({title}) => {
//     return (
//         <div>
//             <h4>{title}</h4>
//         </div>
//     )
// };
//
// const Filter = ({value, active, onChange}) => (
//     <label className="filter">
//         <input type="checkbox" checked={active} data-value={value} onChange={onChange}/>
//         {value}
//     </label>
// );
//
// function App({items}) {
//     const [filters, setFilters] = useState([]);
//     useEffect(() => {
//         const filterValues = [...new Set(['all', ...items.map(n => n.brand)])];
//         setFilters(filterValues.map((n, i) => ({active: false, value: n, id: i + 1})));
//     }, [items]);
//     const onFilterChange = ({target: {checked: active, dataset: {value}}}) => {
//         const newFilters = filters.map(n => [n.value, 'all'].includes(value) ? {...n, active} : n)
//         const isAll = newFilters.filter(n => n.value !== 'all').every(n => n.active);
//         newFilters.find(n => n.value === 'all').active = isAll;
//         setFilters(newFilters);
//     };
//     const filteredBrands = filters.filter(n => n.active).map(n => n.value),
//         filteredItems = items.filter(n => filteredBrands.includes(n.brand));
//
//     return (
//         <div>
//             {filters.map(n => <Filter key={n.id} {...n} onChange={onFilterChange}/>)}
//             {filteredItems.map(n => <Item key={n.id} {...n} />)}
//         </div>
//     );
// }
//
// const Items = [
//     {brand: 'Acer', title: 'Acer 1'},
//     {brand: 'Acer', title: 'Acer 2'},
//     {brand: 'Asus', title: 'Asus 1'},
//     {brand: 'Acer', title: 'Acer 3'},
//     {brand: 'Apple', title: 'Apple 1'},
//     {brand: 'Acer', title: 'Acer 4'},
//     {brand: 'Apple', title: 'Apple 2'},
//     {brand: 'Asus', title: 'Asus 2'},
//     {brand: 'Asus', title: 'Asus 3'},
//     {brand: 'Acer', title: 'Acer 5'},
//     {brand: 'Apple', title: 'Apple 3'},
// ].map((n, i) => ({...n, id: i + 1}));
//
// // ReactDOM.render(<App items={Items} />, document.getElementById('app'));