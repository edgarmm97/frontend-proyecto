import { useCallback } from 'react';
import ReactFlow, {
    MiniMap,
    Controls,
    Background,
    useNodesState,
    useEdgesState,
    addEdge,
} from 'reactflow';
import 'reactflow/dist/style.css';
import ButtonFilled from '../components/Buttons/ButtonFilled';



const initialNodes = [
    { id: '1', position: { x: 0, y: 0 }, data: { label: 'Node 1' } },
    { id: '2', position: { x: 0, y: 100 }, data: { label: 'Node 2' } },
];

const initialEdges = [
    { id: 'e1-2', source: '1', target: '2' }
];


function Organizacion() {

    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const getNodeId = () => `${+new Date()}`;

    const onAdd = useCallback(() => {
        const newNode = {
            id: getNodeId(),
            data: { label: getNodeId() },
            position: {
                x: 400,
                y: 400,
            },
        };
        setNodes((nds) => nds.concat(newNode));

    }, [setNodes]);

    const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

    return (
        <>
            <p className="text-gray-700 text-3xl mb-16 font-bold">Organización</p>
            <div className="grid col-1 bg-white h-full shadow-sm">
                <div class="flex items-center justify-between border-b">
                    <div className="p-3 text-gray-700 text-lg font-bold">Diagrama de la organización</div>
                    <div class="p-3 flex">
                        <div class="inline-flex items-center rounded-md shadow-sm">

                            <div class="inline-block mr-2 mt-2">
                                <ButtonFilled type="warning">Restaurar</ButtonFilled>
                            </div>

                            <div class="inline-block mr-2 mt-2">
                                <ButtonFilled onClick={onAdd}>Agregar nodo</ButtonFilled>
                            </div>
                            <div class="inline-block mr-2 mt-2">
                                <ButtonFilled type="success">Guardar diagrama</ButtonFilled>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="p-3 text-lg text-gray-600" >

                    <div style = {{width:800, height:800}}>

                    <ReactFlow
                        nodes={nodes}
                        edges={edges}
                        onNodesChange={onNodesChange}
                        onEdgesChange={onEdgesChange}
                        onConnect={onConnect}
                    >
                        <MiniMap />
                        <Controls />
                        <Background />
                    </ReactFlow>

                    </div>
                    
                </div>
                {/* <div class="p-3 border-t text-lg text-gray-600">
            Tailwind Footer
        </div> */}
            </div>
        </>
    );
}

export default Organizacion;