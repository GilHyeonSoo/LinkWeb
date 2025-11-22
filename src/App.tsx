import { useState } from 'react';
import { Link as LinkIcon, Plus, ExternalLink, Trash2 } from 'lucide-react';

interface Link {
  id: string;
  url: string;
  title: string;
  description: string;
  createdAt: Date;
}

function App() {
  const [links, setLinks] = useState<Link[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    url: '',
    title: '',
    description: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newLink: Link = {
      id: Date.now().toString(),
      ...formData,
      createdAt: new Date()
    };
    setLinks([newLink, ...links]);
    setFormData({ url: '', title: '', description: '' });
    setShowModal(false);
  };

  const deleteLink = (id: string) => {
    setLinks(links.filter(link => link.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30">
              <LinkIcon className="w-5 h-5 text-white" strokeWidth={2.5} />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              링크다모아
            </h1>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-slate-800 mb-6 leading-tight">
            흩어진 링크들을<br />한 곳에 모아보세요
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            매일 수많은 웹사이트를 방문하지만, 나중에 다시 찾기는 어렵죠.
            링크다모아는 당신의 소중한 링크들을 체계적으로 관리할 수 있는 가장 간단한 방법입니다.
          </p>
        </div>

        <div className="mb-12 flex justify-center">
          <button
            onClick={() => setShowModal(true)}
            className="group bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl shadow-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-300 flex items-center gap-3 hover:scale-105"
          >
            <Plus className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
            링크 추가하기
          </button>
        </div>

        {links.length === 0 ? (
          <div className="bg-white/60 backdrop-blur rounded-3xl p-16 text-center border border-slate-200">
            <div className="w-24 h-24 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <LinkIcon className="w-12 h-12 text-slate-400" />
            </div>
            <h3 className="text-2xl font-semibold text-slate-700 mb-3">
              아직 저장된 링크가 없습니다
            </h3>
            <p className="text-slate-500 text-lg">
              첫 번째 링크를 추가하고 컬렉션을 시작해보세요
            </p>
          </div>
        ) : (
          <div className="grid gap-6">
            {links.map((link) => (
              <div
                key={link.id}
                className="group bg-white/80 backdrop-blur rounded-2xl p-6 border border-slate-200 hover:shadow-xl hover:border-blue-300 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-semibold text-slate-800 mb-2 flex items-center gap-2">
                      {link.title}
                      <ExternalLink className="w-4 h-4 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="text-slate-600 mb-3 leading-relaxed">
                      {link.description}
                    </p>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 font-medium text-sm break-all hover:underline"
                    >
                      {link.url}
                    </a>
                  </div>
                  <button
                    onClick={() => deleteLink(link.id)}
                    className="p-2 hover:bg-red-50 rounded-xl transition-colors text-slate-400 hover:text-red-600"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-24 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <LinkIcon className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-2">간편한 저장</h3>
            <p className="text-slate-600 leading-relaxed">
              클릭 몇 번으로 중요한 링크를 빠르게 저장하고 관리할 수 있습니다
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <ExternalLink className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-2">빠른 접근</h3>
            <p className="text-slate-600 leading-relaxed">
              저장된 링크를 언제든지 빠르게 찾아서 바로 방문할 수 있습니다
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Plus className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-2">무제한 추가</h3>
            <p className="text-slate-600 leading-relaxed">
              원하는 만큼 링크를 추가하고 나만의 웹 라이브러리를 만들어보세요
            </p>
          </div>
        </div>
      </main>

      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-6">
          <div className="bg-white rounded-3xl p-8 max-w-lg w-full shadow-2xl">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">새 링크 추가</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-5">
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  URL
                </label>
                <input
                  type="url"
                  required
                  value={formData.url}
                  onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="https://example.com"
                />
              </div>
              <div className="mb-5">
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  제목
                </label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="링크 제목을 입력하세요"
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  설명
                </label>
                <textarea
                  required
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  rows={3}
                  placeholder="이 링크에 대한 간단한 설명을 입력하세요"
                />
              </div>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="flex-1 px-6 py-3 border border-slate-300 text-slate-700 rounded-xl font-semibold hover:bg-slate-50 transition-colors"
                >
                  취소
                </button>
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-blue-700 shadow-lg shadow-blue-500/30 transition-all"
                >
                  추가
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
