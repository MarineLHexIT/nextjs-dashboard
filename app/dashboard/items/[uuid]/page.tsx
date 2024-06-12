export const runtime = 'edge';

interface ItemPageProps {
    params: {
        uuid: string;
    };
}

export default function Page({ params }: ItemPageProps) {

    const { uuid } = params;

    return <>{ uuid }</>;
}