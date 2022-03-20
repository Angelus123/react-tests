import { act, render, fireEvent} from '@testing-library/react';
import Button from './Button';

describe( "Button component", () => {
  it('rendered Button ', () => {
    const { getByTestId } = render( <Button />);
    const button = getByTestId('button');
    expect (button).toBeTruthy();
  });

  it('rendered one button before  button click ',() => {
        const { getAllByTestId } = render( <Button />);
        const buttonList = getAllByTestId('button');
        expect (buttonList).toHaveLength(1);
  });

  it('rendered two button after  button click ', async() => {
    await act(async () => {
        const { getAllByTestId } = render( <Button />);
        let buttonList = getAllByTestId('button');
        await fireEvent.click(buttonList[0])
        expect (getAllByTestId('button')).toHaveLength(2);
    });

    })
  
})

