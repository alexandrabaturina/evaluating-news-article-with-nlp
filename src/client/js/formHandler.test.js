import { jsonCheck } from './formHandler'

test('getting invalid json response', () => {
    const mockJSON = {
        polarity: 'neutral',
        subjectivity: 'objective',
        date: 'today',
        subjectivity_confidence: 0.765
    };
    expect(jsonCheck(mockJSON)).toEqual(false);
});

test('getting valid json response', () => {
    const validJSON = {
        polarity: 'neutral',
        subjectivity: 'subjective',
        polarity_confidence: 0.9093104600906372,
        subjectivity_confidence: 0.9999997504865653
    }
    expect(jsonCheck(validJSON)).toEqual(true);
});