import React, {Fragment, useState} from 'react';
import SearchableDropdown from './SearchableDropDown';

const DropdownPicker = ({
  placeholder,
  items,
  setSearchProfileValue,
  resetMessages,
  onItemSelect = arg => {},
}) => {
  const [selected, setSelected] = useState(placeholder);

  return (
    <Fragment>
      <SearchableDropdown
        onItemSelect={item => {
          setSelected(item.name);
          onItemSelect(item.name);
          resetMessages && resetMessages(item.id, item.name, item.avatar);
        }}
        containerStyle={{padding: 5}}
        itemStyle={{
          padding: 0,
          marginTop: 2,
        }}
        itemTextStyle={{color: '#222'}}
        itemsContainerStyle={{maxHeight: 140}}
        items={items}
        resetValue={false}
        textInputProps={{
          placeholder: selected,
          underlineColorAndroid: 'transparent',
          style: {
            padding: 2,
            borderRadius: 5,
          },
          onTextChange: text =>
            setSearchProfileValue && setSearchProfileValue(text),
        }}
        listProps={{
          nestedScrollEnabled: true,
        }}
      />
    </Fragment>
  );
};

export default DropdownPicker;
