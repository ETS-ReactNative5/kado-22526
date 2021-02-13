import React, {Fragment, useState} from 'react';
import SearchableDropdown from './SearchableDropDown';

const DropdownPicker = ({
  placeholder,
  profiles,
  setSearchProfileValue,
  resetMessages,
}) => {
  const [selected, setSelected] = useState(placeholder);

  return (
    <Fragment>
      <SearchableDropdown
        onItemSelect={item => {
          setSelected(item.name);
          resetMessages(item.id, item.name, item.avatar);
        }}
        containerStyle={{padding: 5}}
        itemStyle={{
          padding: 0,
          marginTop: 2,
        }}
        itemTextStyle={{color: '#222'}}
        itemsContainerStyle={{maxHeight: 140}}
        items={
          profiles?.results?.map(profile => ({
            id: profile.id,
            name: profile.fullname,
            avatar: profile.photo,
          })) || []
        }
        resetValue={false}
        textInputProps={{
          placeholder: selected,
          underlineColorAndroid: 'transparent',
          style: {
            padding: 2,
            borderRadius: 5,
          },
          onTextChange: text => setSearchProfileValue(text),
        }}
        listProps={{
          nestedScrollEnabled: true,
        }}
      />
    </Fragment>
  );
};

export default DropdownPicker;
