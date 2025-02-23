import { ImCross } from 'react-icons/im'
import {
  StyledBody,
  StyledTextField,
  StyledGridLine,
  StyledButton,
  StyledOverline,
  StyledHeadline,
  StyledSubtitle,
  StyledSelectItem,
  StyledButtonBody,
  StyledGridItem,
  StyledAddedScroll,
} from './index.styles'
import CheckboxForm from './CheckboxForm'

const SuggestedElements = ({
  tabIndex = 0,
  selectList,
  suggestedList,
  formik,
  selectLabel,
  inputPlaceHolder,
  overline,
  subtitle,
  headline,
  isPosition = false,
  role,
  checkbox,
  columnCount,
  subValues,
}) => {
  const formikValues = subValues ? { ...formik?.values?.[subValues] } : { ...formik?.values }
  const formikSearchValues = subValues ? `${subValues}.searchText` : 'searchText'

  const prevFormikValues = { ...formik?.values }
  const formikTouched = subValues ? formik?.touched?.[subValues] : formik?.touched
  const formikError = subValues ? formik?.error?.[subValues] : formik?.error

  const sortArray = (list) => {
    list?.sort(function (a, b) {
      let x = a.name?.toLowerCase()
      let y = b.name?.toLowerCase()
      if (x < y) {
        return -1
      }
      if (x > y) {
        return 1
      }
      return 0
    })
    return list
  }
  const handleIconClick = (item) => {
    const list = formikValues?.addedItemsFormik ?? []
    let added = [...list[tabIndex]]

    for (let i = 0; i < added.length; i++) {
      if (added[i].position.id === item.id) {
        added.splice(i, 1)
      }
    }
    list[tabIndex] = [...added]
    subValues
      ? formik.setValues({ ...prevFormikValues, [subValues]: { ...formikValues, addedItemsFormik: [...list] } })
      : formik.setValues({ ...prevFormikValues, addedItemsFormik: [...list] })
  }

  const handleButtonClick = (item) => {
    const list = formikValues?.addedItemsFormik ?? []
    const listItem = list[tabIndex] ?? []
    const added = isPosition ? { position: item } : { position: item, experienceYears: selectList[0] }
    list[tabIndex] = [...listItem, added]
    subValues
      ? formik.setValues({ ...prevFormikValues, [subValues]: { ...formikValues, addedItemsFormik: [...list] } })
      : formik.setValues({
          ...prevFormikValues,
          addedItemsFormik: [...list],
        })
  }

  const checkSuggestionList = (item) => {
    let added = formikValues?.addedItemsFormik[tabIndex]
    for (let index = 0; index < added?.length; index++) {
      if (item.id === added[index]?.position?.id) {
        return false
      }
    }
    return true
  }

  if (!formik) {
    return
  }

  return (
    <StyledBody>
      {headline && <StyledHeadline type="Headline2">{headline}</StyledHeadline>}
      {subtitle && <StyledSubtitle type="Subtitle1">{subtitle}</StyledSubtitle>}
      {isPosition && <StyledSubtitle type="Subtitle1">You can choose max 5 positions.</StyledSubtitle>}
      <StyledGridLine className="searchLine">
        <StyledTextField
          type="text"
          name={formikSearchValues}
          color="secondary"
          value={formikValues?.searchText}
          onChange={formik.handleChange}
          error={formikTouched?.searchText && Boolean(formikError?.searchText)}
          helperText={formikTouched?.searchText && formikError?.searchText}
          placeholder={inputPlaceHolder}
          disabled={isPosition && formikValues?.addedItemsFormik[tabIndex]?.length >= 5}
        />
      </StyledGridLine>
      <StyledOverline type="Body1">{overline} </StyledOverline>
      <StyledOverline type="Body1">
        {suggestedList?.length === 0 ? "We couldn't find any suggestion for your selection" : ''}
      </StyledOverline>
      <StyledButtonBody columnCount={columnCount ?? 3}>
        {sortArray(suggestedList)
          ?.filter(
            (item) => item.name?.toLowerCase().includes(formikValues?.searchText?.toLowerCase()) && checkSuggestionList(item)
          )
          .map((item, index) =>
            checkbox ? (
              formikValues?.seeMore ? (
                <CheckboxForm key={index} item={item} formikValues={formikValues} formik={formik} />
              ) : (
                index < 13 && <CheckboxForm key={index} item={item} formikValues={formikValues} formik={formik} />
              )
            ) : formikValues?.seeMore ? (
              <StyledButton
                key={index}
                className="listedButton"
                variant="contained"
                onClick={() => handleButtonClick(item)}
                disabled={isPosition && formikValues?.addedItemsFormik?.[tabIndex]?.length >= 5}
              >
                {item.name}
              </StyledButton>
            ) : (
              index < 13 && (
                <StyledButton
                  key={index}
                  className="listedButton"
                  variant="contained"
                  onClick={() => handleButtonClick(item)}
                  disabled={isPosition && formikValues?.addedItemsFormik?.[tabIndex]?.length >= 5}
                >
                  {item.name}
                </StyledButton>
              )
            )
          )}
        {suggestedList?.filter(
          (item) => item.name?.toLowerCase().includes(formikValues?.searchText?.toLowerCase()) && checkSuggestionList(item)
        ).length >= 14 && (
          <StyledButton
            className="link"
            onClick={() => {
              subValues
                ? formik.setValues({ ...prevFormikValues, [subValues]: { ...formikValues, seeMore: !formikValues?.seeMore } })
                : formik.setValues({ ...prevFormikValues, seeMore: !formikValues?.seeMore })
            }}
          >
            {formikValues?.seeMore ? 'See Less >' : 'See More >'}
          </StyledButton>
        )}
      </StyledButtonBody>
      {formikValues?.addedItemsFormik[tabIndex]?.length > 0 && !checkbox ? (
        <StyledAddedScroll>
          {formikValues?.addedItemsFormik[tabIndex]?.map(({ position }, listIndex) => (
            <StyledGridLine className="addedLine" key={listIndex} label={selectLabel}>
              <StyledGridItem>
                <StyledButton
                  className="added"
                  variant="contained"
                  onClick={() => handleIconClick(position)}
                  endIcon={<ImCross className="icon" />}
                >
                  {position?.name}
                </StyledButton>
              </StyledGridItem>
              {(role === 'candidate' || role === 'client') && !isPosition ? (
                <StyledGridItem>
                  <StyledSelectItem
                    className="select-item"
                    menuItems={selectList}
                    name={`${subValues ? `${subValues}.` : ''}addedItemsFormik[${tabIndex}][${listIndex}].experienceYears.id`}
                    value={formikValues?.addedItemsFormik[tabIndex][listIndex]?.experienceYears?.id}
                    label={selectLabel}
                    handleChange={formik.handleChange}
                  />
                </StyledGridItem>
              ) : null}
            </StyledGridLine>
          ))}
        </StyledAddedScroll>
      ) : null}
    </StyledBody>
  )
}

export default SuggestedElements
