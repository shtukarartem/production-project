import { ThemeProvider } from 'app/providers/ThemeProvider';
import { render } from 'react-dom';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from 'app/providers/StoreProvider';
import { App } from './app/App';
import 'shared/config/i18n/i18n';
import 'app/styles/index.scss';

render(
    <StoreProvider>
        <BrowserRouter>
            {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
{/* @ts-ignore */}
            <ErrorBoundary >
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </BrowserRouter>
    </StoreProvider>,
    document.getElementById('root'),
);
