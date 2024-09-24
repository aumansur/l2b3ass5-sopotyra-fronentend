import { Select } from 'antd';

const SFSelect = () => {
    return (
        <Select
        showSearch
        style={{ width: 200 }}
        placeholder="Select role"
        optionFilterProp="label"
        
     />

    )
};

export default SFSelect;