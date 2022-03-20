import { act, render, fireEvent} from '@testing-library/react';
import Input from './Input';

describe("Input component", () => {
  it('rendered input ', () => {
    const { getByTestId } = render(<Input />);
    const input = getByTestId('searchBar');
    expect(input).toBeTruthy();
  });

  it("render div", () => {
    const { getByTestId } = render(<Input showDiv ={true}/>);
    const div = getByTestId("divWantToShow");
    expect(div).toBeTruthy();
  })

  it("don't render div", () => {
    const { queryByTestId } = render(<Input showDiv ={false}/>);
    const div = queryByTestId("divWantToShow");
    expect(div).toBeFalsy();
  })

  it("Change on input cause change on header", async () => {
        await act(async ()=>{
            const { getByTestId } = render(<Input showDiv ={true}/>);
            const input = getByTestId("searchBar");
            const header = getByTestId("displaySearch");
            const inputWord = "Pedro"
            await fireEvent.change(input, {target: {value: inputWord}})
            expect(header.innerHTML).toBe(inputWord)
        })
  })

})

